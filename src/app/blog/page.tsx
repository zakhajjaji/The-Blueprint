import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Zak's Blueprint",
  description: "Articles and insights about web development, AI, and modern technologies",
};

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const otherPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen w-full text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-lg text-foreground/70">
            Articles and insights about web development, AI and other modern technologies
          </p>
        </div>

        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Featured</h2>
            <BlogCard post={featuredPost} />
          </div>
        )}

        {otherPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">All Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        )}

        {blogPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-foreground/70">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
