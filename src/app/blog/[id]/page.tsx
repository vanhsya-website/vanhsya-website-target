import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import {
  comprehensiveBlogPosts,
  migrationBlogCategories,
} from '@/lib/data/blogContent';
import BlogPageClient from '@/components/BlogPageClient';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return comprehensiveBlogPosts.map((post) => ({
    id: post.id,
  }));
}

// Server component page
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Find the post by ID
  const post = comprehensiveBlogPosts.find(p => p.id === id);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = comprehensiveBlogPosts
    .filter(p => p.id !== id && p.category === post?.category)
    .slice(0, 3);

  // Get category info
  const categoryInfo = migrationBlogCategories.find(
    cat => cat.id === post?.category
  );

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <BlogPageClient
        post={post}
        relatedPosts={relatedPosts}
        categoryInfo={categoryInfo}
      />
    </Suspense>
  );
}
