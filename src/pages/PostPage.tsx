import { useParams, Link } from 'react-router-dom';
import { posts } from '@/data/posts';
import { BlogLayout } from '@/components/layout/BlogLayout';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
      <p className="text-muted-foreground mb-8">
        Sorry, we couldn't find the post you're looking for.
      </p>
      <Link to="/" className="text-primary hover:underline">
        &larr; Back to Home
      </Link>
    </div>
  );
}
export function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <BlogLayout>
        <NotFound />
      </BlogLayout>
    );
  }
  return (
    <BlogLayout>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to all posts
          </Link>
          <h1 className="font-sans text-4xl md:text-5xl font-bold !leading-tight tracking-tighter mb-4">
            {post.title}
          </h1>
          <p className="text-muted-foreground">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </p>
        </div>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.article>
    </BlogLayout>
  );
}