import { BlogLayout } from '@/components/layout/BlogLayout';
import { motion } from 'framer-motion';
export function AboutPage() {
  return (
    <BlogLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose"
      >
        <h1>About Serene Scribe</h1>
        <p>
          Serene Scribe is a demonstration of a modern, minimalist static blog application. It was built with a philosophy of 'content-first', prioritizing performance, clarity, and visual elegance to create an exceptional reading experience.
        </p>
        <p>
          The entire application is designed to be clean and uncluttered, using a sophisticated, limited color palette to ensure the reader's attention remains on the written word. It runs on Cloudflare's edge network, making it incredibly fast and reliable.
        </p>
        <h2>The Technology</h2>
        <p>
          This project is built using a modern frontend stack, including:
        </p>
        <ul>
          <li>React and React Router for the user interface and navigation.</li>
          <li>Tailwind CSS and shadcn/ui for a utility-first styling approach.</li>
          <li>Framer Motion for subtle, delightful animations.</li>
          <li>Vite for a fast and modern development experience.</li>
          <li>Cloudflare Workers for deployment to the edge.</li>
        </ul>
        <p>
          The goal was to create a beautiful, high-performance application that showcases best practices in modern web development, with an obsessive attention to visual excellence.
        </p>
      </motion.div>
    </BlogLayout>
  );
}