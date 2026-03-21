import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Zak's Blueprint Blog`,
    description: post.description,
  };
}

const markdownComponents = {
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="mb-6 text-pretty text-[15px] leading-[1.75] text-foreground/[0.88] last:mb-0 md:text-[1.0625rem]">
      {children}
    </p>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="scroll-mt-24 text-[1.2rem] md:text-2xl font-semibold tracking-tight text-foreground mt-14 mb-6 pb-3 first:mt-0 first:pt-0">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="scroll-mt-24 text-base md:text-lg font-semibold text-foreground mt-10 mb-4 text-balance">
      {children}
    </h3>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="my-8 space-y-3 pl-5 text-[15px] md:text-[1.0625rem] leading-[1.75] text-foreground/[0.88] list-disc marker:text-primary/55">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="my-8 list-decimal space-y-3 pl-5 text-[15px] md:text-[1.0625rem] leading-[1.75] text-foreground/[0.88] marker:text-primary/55">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="pl-1 [&>p]:mb-2 [&>p]:last:mb-0">{children}</li>
  ),
  code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className="block font-mono text-sm text-foreground/90 whitespace-pre" {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className="bg-foreground/5 text-foreground/90 text-sm px-1.5 py-0.5 font-mono"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children }: { children?: React.ReactNode }) => (
    <pre className="my-6 overflow-x-auto bg-foreground/5 text-foreground/90 text-sm py-4 px-4 font-mono">
      {children}
    </pre>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <Link
      href={href ?? "#"}
      className="text-foreground underline underline-offset-2 hover:text-foreground/80 transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => (
    <em className="italic text-foreground/[0.88]">{children}</em>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="my-8 border-l-[3px] border-primary/35 bg-muted/50 py-4 pl-5 pr-4 text-[15px] md:text-[1.0625rem] leading-[1.75] text-foreground/[0.88]">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-12 border-0 border-t border-border/70" />,
  table: ({ children }: { children?: React.ReactNode }) => (
    <div className="my-10 w-full overflow-x-auto border border-border/60 bg-card/50 shadow-sm ring-1 ring-border/30">
      <table className="w-full min-w-[min(100%,560px)] border-collapse text-left text-[13px] md:text-[14px]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children?: React.ReactNode }) => (
    <thead className="bg-muted/60">{children}</thead>
  ),
  tbody: ({ children }: { children?: React.ReactNode }) => <tbody className="[&_tr:nth-child(even)]:bg-foreground/[0.02]">{children}</tbody>,
  tr: ({ children }: { children?: React.ReactNode }) => (
    <tr className="border-b border-border/40 transition-colors hover:bg-foreground/[0.03] last:border-0">{children}</tr>
  ),
  th: ({ children }: { children?: React.ReactNode }) => (
    <th className="px-3 py-3 font-semibold text-foreground align-top first:pl-4 last:pr-4 md:px-4 md:first:pl-5 md:last:pr-5 first:font-mono first:text-[12px] first:tracking-wide first:text-foreground/75">
      {children}
    </th>
  ),
  td: ({ children }: { children?: React.ReactNode }) => (
    <td className="px-3 py-3 text-foreground/[0.88] align-top first:pl-4 last:pr-4 md:px-4 md:first:pl-5 md:last:pr-5 first:font-mono first:text-[12px] md:first:text-[13px] first:tracking-tight">
      {children}
    </td>
  ),
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-foreground/55 hover:text-foreground hover:bg-foreground/[0.04] -ml-2 px-2 py-1.5 mb-8 md:mb-10 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          Back to Blog
        </Link>

        <article className="bg-card/40 px-5 py-8 ring-1 ring-border/30 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <header className="mb-10 md:mb-12">
            <h1 className="text-balance text-3xl md:text-[2.35rem] md:leading-[1.2] font-semibold tracking-tight text-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 bg-background/80 px-3 py-1 text-foreground/65">
                <Calendar className="w-3.5 h-3.5 shrink-0 opacity-70" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-background/80 px-3 py-1 text-foreground/65">
                <Clock className="w-3.5 h-3.5 shrink-0 opacity-70" />
                {post.readTime} min read
              </span>
              <span className="inline-flex items-center border border-primary/20 bg-primary/[0.08] px-3 py-1 text-primary/90 font-medium">
                {post.category}
              </span>
            </div>
          </header>

          {post.content ? (
            <div className="blog-content pt-10 md:pt-12 [&>*:first-child]:mt-0">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {post.content}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="text-foreground/60 leading-relaxed">
              This blog post is coming soon. Check back later for the full content.
            </p>
          )}
        </article>
      </div>
    </div>
  );
}
