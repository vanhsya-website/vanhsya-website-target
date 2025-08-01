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
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogPostClient postId={params.id} />;
}
