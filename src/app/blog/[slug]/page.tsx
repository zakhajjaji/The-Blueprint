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
    <p className="text-foreground/85 leading-[1.7] text-[15px] md:text-base mb-6 last:mb-0">
      {children}
    </p>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-xl font-semibold text-foreground mt-10 mb-4 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="text-base font-semibold text-foreground mt-8 mb-3">
      {children}
    </h3>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="list-none my-6 space-y-2 text-foreground/85 text-[15px] md:text-base leading-[1.7]">
      {children}
    </ul>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="flex gap-2">
      <span className="text-foreground/50">·</span>
      <span>{children}</span>
    </li>
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
  table: ({ children }: { children?: React.ReactNode }) => (
    <div className="my-8 w-full overflow-x-auto rounded-sm border border-border/70 bg-background/40">
      <table className="w-full min-w-[520px] border-collapse text-left text-[14px] md:text-[15px]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children?: React.ReactNode }) => (
    <thead className="border-b border-border/70 bg-foreground/[0.04]">{children}</thead>
  ),
  tbody: ({ children }: { children?: React.ReactNode }) => <tbody>{children}</tbody>,
  tr: ({ children }: { children?: React.ReactNode }) => (
    <tr className="border-b border-border/50 last:border-0">{children}</tr>
  ),
  th: ({ children }: { children?: React.ReactNode }) => (
    <th className="px-3 py-2.5 font-semibold text-foreground align-top first:pl-4 last:pr-4 md:first:pl-5 md:last:pr-5">
      {children}
    </th>
  ),
  td: ({ children }: { children?: React.ReactNode }) => (
    <td className="px-3 py-2.5 text-foreground/85 align-top first:pl-4 last:pr-4 md:first:pl-5 md:last:pr-5">
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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-10 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-foreground/50 mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </span>
            <span className="text-foreground/50">{post.category}</span>
          </div>

          {post.content ? (
            <div className="blog-content">
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
