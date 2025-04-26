import { Link } from "react-router-dom";
import { BlogPost } from "@/types/blog";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"; // Using Shadcn Card
import { motion } from "framer-motion";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }} // Subtle lift on hover
    >
      <Link to={`/blog/${post.slug}`} className="block group">
        <Card className="bg-gray-800/60 border-gray-700 hover:border-standardOps-purple transition-colors duration-300 overflow-hidden h-full flex flex-col">
          {/* Thumbnail */}
          <div className="aspect-video overflow-hidden"> {/* Changed aspect ratio */}
            <img
              src={post.thumbnailUrl}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {/* Content */}
          <CardContent className="p-4 flex-grow">
            {/* Title below image */}
            <CardTitle className="text-lg font-semibold text-white group-hover:text-standardOps-purple transition-colors duration-300 line-clamp-2">
              {post.title}
            </CardTitle>
          </CardContent>
          {/* Optional Footer for date/topics if needed later */}
          {/* <CardFooter className="p-4 pt-0 text-xs text-gray-400">
            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
          </CardFooter> */}
        </Card>
      </Link>
    </motion.div>
  );
};

export default BlogPostCard;
