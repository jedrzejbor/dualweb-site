import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";
import { GlowGridBackground } from "@/components/blog/GlowGridBackground";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

  // SEO dla pojedynczego posta
  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
      return {
        title: "Artykuł nie znaleziony | Dualweb",
        description: "Szukany artykuł nie istnieje lub został przeniesiony.",
      };
    }

    const baseUrl = "https://dualweb.pl";
    const url = `${baseUrl}/blog/${post.slug}`;

    return {
      title: `${post.title} | Blog Dualweb`,
      description: post.excerpt,
      alternates: {
        canonical: url,
      },
      openGraph: {
        type: "article",
        url,
        title: post.title,
        description: post.excerpt,
        siteName: "Dualweb",
        locale: "pl_PL",
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
      },
    };
  }

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden bg-slate-950 min-h-screen">
      <GlowGridBackground />

      <article className="relative z-10 mx-auto max-w-3xl px-4 py-16 md:py-24">
        <p className="kicker text-indigo-400">Blog</p>
        <h1 className="mt-3 heading-font text-3xl font-extrabold text-slate-50 sm:text-4xl md:text-5xl">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {post.title}
          </span>
        </h1>

        <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
          <span>
            {new Date(post.date).toLocaleDateString("pl-PL", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
          <span>•</span>
          <span>{post.readingTime} czytania</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700/60 bg-slate-900/80 px-2 py-0.5 text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 space-y-5 text-sm leading-relaxed text-slate-200 sm:text-base">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}