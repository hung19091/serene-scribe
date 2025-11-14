import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
type BlogLayoutProps = {
  children: React.ReactNode;
};
const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-muted-foreground transition-colors hover:text-primary",
    isActive && "text-primary font-semibold"
  );
export function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="text-2xl font-bold font-display tracking-tight text-foreground">
                Serene Scribe
              </Link>
            </motion.div>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
              <NavLink to="/about" className={navLinkClasses}>
                About
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-24">
          {children}
        </div>
      </main>
      <footer className="border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
            <p className="text-sm text-muted-foreground">
              Built with ❤️ at Cloudflare
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}