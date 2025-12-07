"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/blogPosts";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/40 transition hover:-translate-y-1 hover:border-cyan-400/60">
      {/* neon w tle */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-cyan-500/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-center justify-between text-[11px] text-slate-400">
        <span>{new Date(post.date).toLocaleDateString("pl-PL")}</span>
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-3 heading-font text-sm font-semibold text-slate-50 sm:text-base">
        <Link href={`/blog/${post.slug}`}>
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-indigo-400">
            {post.title}
          </span>
        </Link>
      </h3>

      <p className="mt-2 line-clamp-3 text-xs text-slate-300 sm:text-sm">
        {post.excerpt}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-700/60 bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-flex items-center text-[11px] font-semibold text-cyan-300"
      >
        Czytaj artykuł
        <span className="ml-1 transition group-hover:translate-x-0.5">↗</span>
      </Link>
    </article>
  );
}
