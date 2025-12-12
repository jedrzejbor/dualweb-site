import { blogPosts } from '@/lib/blogPosts';
import { GlowGridBackground } from '@/components/blog/GlowGridBackground';
import { BlogCard } from '@/components/blog/BlogCard';

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const latest = sorted[0];
  const rest = sorted.slice(1);

  return (
    <div className="relative overflow-hidden border-b border-slate-800 bg-slate-950 min-h-screen">
      <GlowGridBackground />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="space-y-3">
          <p className="kicker text-indigo-400">Blog</p>
          <h1 className="heading-font text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Artykuły o{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
              technologii
            </span>{' '}
            i{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
              rozwoju biznesu
            </span>
            .
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Wpisy o tym, jak łączyć dobry kod z realnymi celami biznesowymi: SaaS, landing page’e,
            e-commerce, automatyzacje i procesy.
          </p>
        </div>

        {/* ostatni / wyróżniony */}
        <section className="mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Najnowszy wpis</p>
          <div className="mt-4">
            <BlogCard post={latest} />
          </div>
        </section>

        {/* reszta */}
        {rest.length > 0 && (
          <section className="mt-10 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Wszystkie wpisy</p>
            <div className="grid gap-4 md:grid-cols-2">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
