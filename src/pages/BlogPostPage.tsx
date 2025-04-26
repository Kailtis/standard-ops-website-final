import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockBlogPosts } from "@/data/blogPosts"; // Import mock data
import { BlogPost } from "@/types/blog"; // Import type
import { Button } from "@/components/ui/button"; // For back button
import { ArrowLeft } from "lucide-react"; // Icon for back button

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>(); // Get slug from URL
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    // Simulate fetching data based on slug
    const foundPost = mockBlogPosts.find(p => p.slug === slug);

    if (foundPost) {
      setPost(foundPost);
    } else {
      setError("Blog post not found.");
    }
    setLoading(false);
  }, [slug]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow pt-20"> {/* Adjust pt based on Navbar height */}
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link to="/blog">
              <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-800">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>
          </div>

          {loading && <p className="text-center">Loading post...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {post && (
            <article className="prose prose-invert prose-lg max-w-none mx-auto bg-gray-900/50 p-6 md:p-10 rounded-lg shadow-lg">
              {/* Use prose classes for basic Markdown styling */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-standardOps-purple to-[#FF7E5F] bg-clip-text text-transparent">
                {post.title}
              </h1>
              <p className="text-sm text-gray-400 mb-6">
                Published on: {new Date(post.publishDate).toLocaleDateString()}
              </p>
              {/* Display main image if available */}
              {post.imageUrl && post.imageUrl !== "/placeholder.svg" && (
                 <img
                   src={post.imageUrl}
                   alt={post.title}
                   className="w-full h-auto object-cover rounded-md mb-8 shadow-md"
                 />
              )}
              {/* Render HTML content - Ensure this is sanitized if coming from external source */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
