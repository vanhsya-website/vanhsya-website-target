import {
  comprehensiveBlogPosts,
} from '@/lib/data/blogContent';

import BlogPostClient from './BlogPostClient';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateStaticParams() {
  return comprehensiveBlogPosts.map((post) => ({
    id: post.id,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  return <BlogPostClient postId={id} />;
}
