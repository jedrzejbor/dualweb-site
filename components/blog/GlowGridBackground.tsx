export function GlowGridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* radial glow top */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_70%)]" />

      {/* radial glow bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(129,140,248,0.1),transparent_75%)]" />

      {/* neon grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:36px_36px]" />

      {/* subtle noise */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('/noise.png')]" />
    </div>
  );
}


// "use client";

// import React from "react";

// type Props = {
//   className?: string;
// };

// export function GlowGridBackground({ className }: Props) {
//   return (
//     <div
//       className={`pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.16),transparent_55%),linear-gradient(to_right,rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.2)_1px,transparent_1px)] bg-[size:auto,auto,32px_32px,32px_32px] ${className ?? ""}`}
//     />
//   );
// }
