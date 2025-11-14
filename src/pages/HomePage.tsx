import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { BlogLayout } from '@/components/layout/BlogLayout';
import { posts } from '@/data/posts';
export function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
  return (
    <BlogLayout>
      <div className="space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold font-display tracking-tight">Welcome to Serene Scribe</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A visually stunning, minimalist static blog designed for clarity, performance, and a delightful reading experience.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {posts.map((post) => (
            <motion.article key={post.id} variants={itemVariants}>
              <div className="group relative">
                <h2 className="text-3xl font-bold font-sans tracking-tight">
                  <Link
                    to={`/post/${post.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-foreground/80">
                  {post.excerpt}
                </p>
                <div className="mt-4 font-semibold text-primary group-hover:underline">
                  Read more &rarr;
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </BlogLayout>
  );
}