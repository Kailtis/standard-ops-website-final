import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockBlogPosts } from "@/data/blogPosts"; // Import mock data
import { BlogPost } from "@/types/blog"; // Import type

// Import the blog components
import TopicFilter from "@/components/blog/TopicFilter";
import HighlightedPost from "@/components/blog/HighlightedPost";
import BlogPostGrid from "@/components/blog/BlogPostGrid";
import PaginationComponent from "@/components/blog/PaginationComponent"; // Renamed to avoid conflict with Shadcn

const POSTS_PER_PAGE = 21; // 7 rows * 3 columns

const BlogPage = () => {
  const [allPosts] = useState<BlogPost[]>(mockBlogPosts); // Keep original data
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState<string>("All");

  // Derive unique topics from all posts
  const allTopics = useMemo(() => {
    const topics = new Set<string>();
    allPosts.forEach(post => post.topics.forEach(topic => topics.add(topic)));
    return ["All", ...Array.from(topics)];
  }, [allPosts]);

  // Find the highlighted post
  const highlightedPost = useMemo(() => {
    return allPosts.find(post => post.isHighlighted);
  }, [allPosts]);

  // Filter posts when selectedTopic changes
  useEffect(() => {
    if (selectedTopic === "All") {
      setFilteredPosts(allPosts.filter(p => !p.isHighlighted)); // Exclude highlighted from main grid
    } else {
      setFilteredPosts(
        allPosts.filter(post => post.topics.includes(selectedTopic) && !post.isHighlighted)
      );
    }
    setCurrentPage(1); // Reset to first page on filter change
  }, [selectedTopic, allPosts]);

  // Calculate posts for the current page
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, currentPage]);

  // Calculate total pages
  const totalPages = useMemo(() => {
    return Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  }, [filteredPosts]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow pt-20"> {/* Adjust pt based on Navbar height */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-standardOps-purple to-[#FF7E5F] bg-clip-text text-transparent">
            Standard Ops Blog
          </h1>

          {/* Topic Filter */}
          <div className="mb-8">
            <TopicFilter
              topics={allTopics}
              selectedTopic={selectedTopic}
              onSelectTopic={setSelectedTopic}
            />
          </div>

          {/* Highlighted Post */}
          {highlightedPost && (
             <HighlightedPost post={highlightedPost} />
          )}

          {/* Blog Post Grid */}
          <div className="mb-8">
            <BlogPostGrid posts={paginatedPosts} />
            {paginatedPosts.length === 0 && filteredPosts.length > 0 && <p className="text-center text-gray-400">No posts found for this topic.</p>}
            {filteredPosts.length === 0 && <p className="text-center text-gray-400">No blog posts available yet.</p>}
          </div>


          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
