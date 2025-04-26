export interface BlogPost {
  id: string; // Unique identifier
  slug: string; // URL-friendly identifier
  title: string;
  thumbnailUrl: string; // Path or URL to the square thumbnail image
  imageUrl: string; // Path or URL to the main (landscape) image for hero/detail view
  content: string; // The main content of the blog post (can be Markdown or HTML)
  publishDate: string; // ISO 8601 date string (e.g., "2025-04-26T10:00:00Z")
  topics: string[]; // Array of topic strings for filtering
  isHighlighted?: boolean; // Optional flag for the featured post
}
