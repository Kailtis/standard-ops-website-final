import { BlogPost } from "@/types/blog";
import BlogPostCard from "./BlogPostCard";
import { motion } from "framer-motion";

interface BlogPostGridProps {
  posts: BlogPost[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger animation for each card
    },
  },
};

const BlogPostGrid = ({ posts }: BlogPostGridProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </motion.div>
  );
};

export default BlogPostGrid;
