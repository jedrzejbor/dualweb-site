"use client";

import { FadeInSection } from "../FadeInSection";
import { GlowGridBackground } from "./GlowGridBackground";
import { blogPosts } from "@/lib/blogPosts";
import { FeaturedBlogCard } from "./FeaturedBlogCard";
import { BlogCard } from "./BlogCard";
import Link from "next/link";

export function BlogSection() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <FadeInSection
      id="blog"
      className="relative overflow-hidden border-b border-slate-800 bg-slate-950"
    >
      <GlowGridBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* nagłówek */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="kicker text-indigo-400">Blog / wiedza</p>
            <h2 className="heading-font text-2xl font-extrabold sm:text-3xl md:text-4xl">
              Dzielimy się{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
                praktycznymi insightami
              </span>{" "}
              o stronach, SaaS i marketingu.
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Nie tylko kodujemy, ale też tłumaczymy, jak technologia wspiera
              sprzedaż i rozwój biznesu. Artykuły, mini case studies i konkretne
              tipy z projektów.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-100 shadow-sm transition hover:border-cyan-400 hover:text-cyan-200 md:text-sm"
          >
            Zobacz wszystkie wpisy
            <span className="ml-1 text-sm">↗</span>
          </Link>
        </div>

        {/* featured + lista */}
        <div className="mt-10 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <FeaturedBlogCard post={featured} />

          <div className="space-y-4">
            {rest.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
