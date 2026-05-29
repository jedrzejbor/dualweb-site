'use client';

import { Camera, Eye, MonitorStop, Radio, Users } from 'lucide-react';
import { FormEvent, useEffect, useRef, useState } from 'react';

type Mode = 'viewer' | 'broadcaster';
type Status = 'idle' | 'connecting' | 'live' | 'error';

type ViewerSignal = {
  id: string;
  offer: RTCSessionDescriptionInit | null;
  viewerCandidates: RTCIceCandidateInit[];
};

const SIGNAL_URL = '/api/insider-camera/signal';
const SESSION_URL = '/api/insider-camera/session';
const VIEWERS_URL = '/api/insider-camera/viewers';
const ICE_SERVERS: RTCConfiguration = {
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
};

async function apiJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    cache: 'no-store',
  });
  const data = (await response.json().catch(() => ({}))) as T & { error?: string };

  if (!response.ok) {
    throw new Error(data.error || 'Nie udalo sie wykonac operacji.');
  }

  return data;
}

export default function InsiderCameraClient() {
  const [mode, setMode] = useState<Mode>('viewer');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('Oczekiwanie na transmisje.');
  const [viewerCount, setViewerCount] = useState(0);
  const [hasActiveSession, setHasActiveSession] = useState(false);

  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const broadcasterKeyRef = useRef<string | null>(null);
  const viewerAuthRef = useRef<{ viewerId: string; viewerKey: string } | null>(null);
  const viewerPeerRef = useRef<RTCPeerConnection | null>(null);
  const broadcasterPeersRef = useRef<Map<string, RTCPeerConnection>>(new Map());
  const broadcasterCandidateCountsRef = useRef<Map<string, number>>(new Map());
  const viewerCandidateCountRef = useRef(0);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function setError(error: unknown) {
    setStatus('error');
    setMessage(error instanceof Error ? error.message : 'Wystapil nieznany blad.');
  }

  function clearPoll() {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  }

  function stopTracks() {
    localStreamRef.current?.getTracks().forEach((track) => track.stop());
    localStreamRef.current = null;
  }

  function closePeerConnections() {
    viewerPeerRef.current?.close();
    viewerPeerRef.current = null;

    for (const peer of broadcasterPeersRef.current.values()) {
      peer.close();
    }

    broadcasterPeersRef.current.clear();
    broadcasterCandidateCountsRef.current.clear();
    viewerCandidateCountRef.current = 0;
  }

  async function stopBroadcast() {
    clearPoll();
    closePeerConnections();
    stopTracks();

    const broadcasterKey = broadcasterKeyRef.current;
    broadcasterKeyRef.current = null;

    if (broadcasterKey) {
      await apiJson(SESSION_URL, {
        method: 'DELETE',
        body: JSON.stringify({ broadcasterKey }),
      }).catch(() => null);
    }

    setViewerCount(0);
    setStatus('idle');
    setMessage('Transmisja zatrzymana.');
  }

  async function pollBroadcaster() {
    const broadcasterKey = broadcasterKeyRef.current;
    const stream = localStreamRef.current;

    if (!broadcasterKey || !stream) {
      return;
    }

    const data = await apiJson<{ viewers: ViewerSignal[] }>(
      `${SIGNAL_URL}?role=broadcaster&broadcasterKey=${encodeURIComponent(broadcasterKey)}`,
    );

    setViewerCount(data.viewers.length);

    for (const viewer of data.viewers) {
      if (!viewer.offer) {
        continue;
      }

      let peer = broadcasterPeersRef.current.get(viewer.id);

      if (!peer) {
        peer = new RTCPeerConnection(ICE_SERVERS);
        broadcasterPeersRef.current.set(viewer.id, peer);

        stream.getTracks().forEach((track) => {
          peer?.addTrack(track, stream);
        });

        peer.onicecandidate = (event) => {
          if (!event.candidate) {
            return;
          }

          apiJson(SIGNAL_URL, {
            method: 'POST',
            body: JSON.stringify({
              role: 'broadcaster',
              broadcasterKey,
              viewerId: viewer.id,
              candidate: event.candidate.toJSON(),
            }),
          }).catch(setError);
        };

        await peer.setRemoteDescription(viewer.offer);
        const answer = await peer.createAnswer();
        await peer.setLocalDescription(answer);

        await apiJson(SIGNAL_URL, {
          method: 'POST',
          body: JSON.stringify({
            role: 'broadcaster',
            broadcasterKey,
            viewerId: viewer.id,
            answer,
          }),
        });
      }

      const appliedCount = broadcasterCandidateCountsRef.current.get(viewer.id) ?? 0;
      const newCandidates = viewer.viewerCandidates.slice(appliedCount);

      for (const candidate of newCandidates) {
        await peer.addIceCandidate(candidate).catch(() => null);
      }

      broadcasterCandidateCountsRef.current.set(viewer.id, viewer.viewerCandidates.length);
    }
  }

  async function startBroadcast(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    clearPoll();
    closePeerConnections();
    stopTracks();
    setStatus('connecting');
    setMessage('Uruchamianie kamery.');

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: false,
      });

      localStreamRef.current = stream;

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      const session = await apiJson<{ broadcasterKey: string; viewerCount: number }>(
        SESSION_URL,
        { method: 'POST' },
      );

      broadcasterKeyRef.current = session.broadcasterKey;
      setViewerCount(session.viewerCount);
      setStatus('live');
      setMessage('Transmisja aktywna. Widzowie moga wejsc na te sama podstrone.');

      pollRef.current = setInterval(() => {
        pollBroadcaster().catch(setError);
      }, 1000);
    } catch (error) {
      stopTracks();
      setError(error);
    }
  }

  async function joinAsViewer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearPoll();
    closePeerConnections();
    setStatus('connecting');
    setMessage('Laczenie z transmisja.');

    try {
      const auth = await apiJson<{ viewerId: string; viewerKey: string }>(
        VIEWERS_URL,
        { method: 'POST' },
      );

      viewerAuthRef.current = auth;

      const peer = new RTCPeerConnection(ICE_SERVERS);
      viewerPeerRef.current = peer;

      peer.addTransceiver('video', { direction: 'recvonly' });

      peer.ontrack = (event) => {
        const [stream] = event.streams;

        if (remoteVideoRef.current && stream) {
          remoteVideoRef.current.srcObject = stream;
        }

        setStatus('live');
        setMessage('Podglad aktywny.');
      };

      peer.onicecandidate = (event) => {
        if (!event.candidate || !viewerAuthRef.current) {
          return;
        }

        apiJson(SIGNAL_URL, {
          method: 'POST',
          body: JSON.stringify({
            role: 'viewer',
            ...viewerAuthRef.current,
            candidate: event.candidate.toJSON(),
          }),
        }).catch(setError);
      };

      const offer = await peer.createOffer();
      await peer.setLocalDescription(offer);

      await apiJson(SIGNAL_URL, {
        method: 'POST',
        body: JSON.stringify({
          role: 'viewer',
          ...auth,
          offer,
        }),
      });

      pollRef.current = setInterval(() => {
        pollViewer().catch(setError);
      }, 1000);
    } catch (error) {
      setError(error);
    }
  }

  async function pollViewer() {
    const auth = viewerAuthRef.current;
    const peer = viewerPeerRef.current;

    if (!auth || !peer) {
      return;
    }

    const params = new URLSearchParams({
      role: 'viewer',
      viewerId: auth.viewerId,
      viewerKey: auth.viewerKey,
    });

    const data = await apiJson<{
      answer: RTCSessionDescriptionInit | null;
      broadcasterCandidates: RTCIceCandidateInit[];
    }>(`${SIGNAL_URL}?${params.toString()}`);

    if (data.answer && !peer.currentRemoteDescription) {
      await peer.setRemoteDescription(data.answer);
    }

    const newCandidates = data.broadcasterCandidates.slice(viewerCandidateCountRef.current);

    for (const candidate of newCandidates) {
      await peer.addIceCandidate(candidate).catch(() => null);
    }

    viewerCandidateCountRef.current = data.broadcasterCandidates.length;
  }

  useEffect(() => {
    apiJson<{ active: boolean; viewerCount: number }>(SESSION_URL)
      .then((data) => {
        setHasActiveSession(data.active);
        setViewerCount(data.viewerCount);
      })
      .catch(() => null);

    return () => {
      clearPoll();
      closePeerConnections();
      stopTracks();
    };
  }, []);

  const isBusy = status === 'connecting';
  const isLive = status === 'live';

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker text-cyan-300">Prywatna transmisja</p>
            <h1 className="heading-font mt-3 max-w-3xl text-3xl leading-tight text-white sm:text-5xl">
              Podglad kamery dla wtajemniczonych
            </h1>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
            <Radio className={isLive ? 'h-4 w-4 text-emerald-300' : 'h-4 w-4 text-slate-500'} />
            {isLive ? 'Aktywne' : hasActiveSession ? 'Transmisja dostepna' : 'Offline'}
          </div>
        </div>

        <div className="grid flex-1 gap-6 lg:grid-cols-[380px_1fr]">
          <aside className="rounded-lg border border-white/10 bg-slate-950/80 p-4 shadow-2xl shadow-cyan-950/20">
            <div className="grid grid-cols-2 gap-2 rounded-lg bg-white/[0.04] p-1">
              <button
                type="button"
                onClick={() => setMode('viewer')}
                className={`flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition ${
                  mode === 'viewer' ? 'bg-cyan-400 text-slate-950' : 'text-slate-300 hover:bg-white/10'
                }`}
              >
                <Eye className="h-4 w-4" />
                Widz
              </button>
              <button
                type="button"
                onClick={() => setMode('broadcaster')}
                className={`flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition ${
                  mode === 'broadcaster'
                    ? 'bg-cyan-400 text-slate-950'
                    : 'text-slate-300 hover:bg-white/10'
                }`}
              >
                <Camera className="h-4 w-4" />
                Nadawca
              </button>
            </div>

            <form
              className="mt-5 space-y-4"
              onSubmit={mode === 'broadcaster' ? startBroadcast : joinAsViewer}
            >
              <button
                type="submit"
                disabled={isBusy || (mode === 'broadcaster' && isLive)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {mode === 'broadcaster' ? <Camera className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {mode === 'broadcaster' ? 'Start transmisji' : 'Wejdz do podgladu'}
              </button>
            </form>

            {mode === 'broadcaster' && isLive ? (
              <button
                type="button"
                onClick={() => stopBroadcast().catch(setError)}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-rose-400/40 px-4 py-3 text-sm font-semibold text-rose-200 transition hover:bg-rose-500/10"
              >
                <MonitorStop className="h-4 w-4" />
                Zatrzymaj transmisje
              </button>
            ) : null}

            <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                <Users className="h-4 w-4 text-cyan-300" />
                Widzowie: {viewerCount}
              </div>
              <p className={`mt-2 text-sm ${status === 'error' ? 'text-rose-300' : 'text-slate-400'}`}>
                {message}
              </p>
            </div>
          </aside>

          <section className="min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl shadow-cyan-950/20">
            {mode === 'broadcaster' ? (
              <video
                ref={localVideoRef}
                className="h-full min-h-[420px] w-full bg-black object-cover"
                autoPlay
                muted
                playsInline
              />
            ) : (
              <video
                ref={remoteVideoRef}
                className="h-full min-h-[420px] w-full bg-black object-cover"
                autoPlay
                playsInline
              />
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
