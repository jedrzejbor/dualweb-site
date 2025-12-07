// import { notFound } from "next/navigation";
// import { blogPosts } from "@/lib/blogPosts";
// import { GlowGridBackground } from "@/components/blog/GlowGridBackground";

// type Props = {
//   params: { slug: string };
// };

// export default function BlogPostPage({ params }: Props) {
//   const post = blogPosts.find((p) => p.slug === params.slug);

//   if (!post) {
//     return notFound();
//   }

//   return (
//     <div className="relative overflow-hidden bg-slate-950">
//       <GlowGridBackground />

//       <article className="relative z-10 mx-auto max-w-3xl px-4 py-16 md:py-24">
//         {/* meta */}
//         <p className="kicker text-indigo-400">Blog</p>
//         <h1 className="mt-3 heading-font text-3xl font-extrabold text-slate-50 sm:text-4xl md:text-5xl">
//           <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
//             {post.title}
//           </span>
//         </h1>

//         <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
//           <span>
//             {new Date(post.date).toLocaleDateString("pl-PL", {
//               day: "2-digit",
//               month: "2-digit",
//               year: "numeric",
//             })}
//           </span>
//           <span>•</span>
//           <span>{post.readingTime} czytania</span>
//           {post.tags.map((tag) => (
//             <span
//               key={tag}
//               className="rounded-full border border-slate-700/60 bg-slate-900/80 px-2 py-0.5 text-[11px]"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* treść */}
//         <div className="mt-10 space-y-5 text-sm leading-relaxed text-slate-200 sm:text-base">
//           {post.content.map((paragraph, idx) => (
//             <p key={idx}>{paragraph}</p>
//           ))}
//         </div>
//       </article>
//     </div>
//   );
// }



import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";
import { GlowGridBackground } from "@/components/blog/GlowGridBackground";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  // 👇 tutaj "odpakowujemy" params
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound(); // w async komponencie nie musisz dawać "return"
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
