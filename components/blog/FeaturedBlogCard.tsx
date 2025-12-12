'use client';

import Link from 'next/link';
import type { BlogPost } from '@/lib/blogPosts';

export function FeaturedBlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl shadow-slate-950/70">
      {/* mocniejszy glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_60%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.28),transparent_55%)] opacity-70 blur-xl" />

      <p className="kicker text-indigo-300">Wyróżniony artykuł</p>

      <h3 className="mt-3 heading-font text-xl font-extrabold text-slate-50 sm:text-2xl">
        <Link href={`/blog/${post.slug}`}>
          <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            {post.title}
          </span>
        </Link>
      </h3>

      <p className="mt-3 text-sm text-slate-200 sm:text-base">{post.excerpt}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
        <span className="rounded-full bg-slate-900/70 px-2 py-0.5 border border-slate-700/60">
          {new Date(post.date).toLocaleDateString('pl-PL')}
        </span>
        <span className="rounded-full bg-slate-900/70 px-2 py-0.5 border border-slate-700/60">
          {post.readingTime}
        </span>
        {post.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-900/70 px-2 py-0.5 border border-slate-700/60"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-6 inline-flex w-fit items-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-indigo-500/40 transition hover:brightness-110"
      >
        Przeczytaj case / artykuł
      </Link>
    </article>
  );
}
