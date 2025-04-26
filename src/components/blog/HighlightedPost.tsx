import { Link } from "react-router-dom";
import { BlogPost } from "@/types/blog";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface HighlightedPostProps {
  post: BlogPost;
}

const HighlightedPost = ({ post }: HighlightedPostProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12" // Add margin bottom
    >
      <Link to={`/blog/${post.slug}`} className="block group">
        {/* Constrain width slightly on larger screens */}
        <Card className="max-w-5xl mx-auto bg-gradient-to-br from-gray-800 via-gray-900 to-black border-gray-700 hover:border-standardOps-purple transition-colors duration-300 overflow-hidden shadow-lg">
          {/* Landscape Image - Adjusted Aspect Ratio */}
          <div className="aspect-[2.5/1] overflow-hidden"> {/* Changed aspect ratio */}
            <img
              src={post.imageUrl} // Use imageUrl for the main landscape image
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {/* Content */}
          <CardContent className="p-6">
            <CardTitle className="text-2xl md:text-3xl font-bold text-white group-hover:text-standardOps-purple transition-colors duration-300 mb-2">
              {post.title}
            </CardTitle>
            <p className="text-sm text-gray-400">
              Featured Post - Published on: {new Date(post.publishDate).toLocaleDateString()}
            </p>
            {/* Optional: Add a short excerpt here if needed */}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default HighlightedPost;
