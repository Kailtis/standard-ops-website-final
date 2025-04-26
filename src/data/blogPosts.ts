import { BlogPost } from "@/types/blog";

// Placeholder data - replace with real content later
export const mockBlogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "ai-in-sales-automation",
    title: "Revolutionizing Sales with AI Automation",
    thumbnailUrl: "/placeholder.svg", // Replace with actual path/URL
    imageUrl: "/placeholder.svg", // Replace with actual path/URL
    content: `
      <p>The landscape of B2B sales is rapidly evolving, and Artificial Intelligence (AI) is at the forefront of this transformation...</p>
      <p>Learn how AI tools can streamline your sales process, from lead generation to closing deals.</p>
      <h2>Key Benefits</h2>
      <ul>
        <li>Increased efficiency</li>
        <li>Improved lead scoring</li>
        <li>Personalized outreach at scale</li>
      </ul>
    `,
    publishDate: "2025-04-26T10:00:00Z",
    topics: ["AI", "Sales", "Automation"],
    isHighlighted: true, // This is the featured post
  },
  {
    id: "post-2",
    slug: "marketing-automation-trends",
    title: "Top Marketing Automation Trends for 2025",
    thumbnailUrl: "/placeholder.svg", // Replace with actual path/URL
    imageUrl: "/placeholder.svg", // Replace with actual path/URL
    content: `
      <p>Stay ahead of the curve by understanding the latest trends in marketing automation...</p>
      <p>From hyper-personalization to predictive analytics, discover what's shaping the future of marketing.</p>
    `,
    publishDate: "2025-04-25T09:00:00Z",
    topics: ["Marketing", "Automation", "Trends"],
  },
  {
    id: "post-3",
    slug: "b2b-lead-generation-strategies",
    title: "Effective B2B Lead Generation Strategies",
    thumbnailUrl: "/placeholder.svg", // Replace with actual path/URL
    imageUrl: "/placeholder.svg", // Replace with actual path/URL
    content: `
      <p>Generating high-quality leads is crucial for B2B growth. Explore proven strategies...</p>
    `,
    publishDate: "2025-04-24T11:00:00Z",
    topics: ["Sales", "Lead Generation", "B2B"],
  },
  {
    id: "post-4",
    slug: "crm-integration-best-practices",
    title: "Best Practices for CRM Integration",
    thumbnailUrl: "/placeholder.svg", // Replace with actual path/URL
    imageUrl: "/placeholder.svg", // Replace with actual path/URL
    content: `
      <p>Integrating your CRM with other tools can unlock powerful insights and efficiencies...</p>
    `,
    publishDate: "2025-04-23T14:00:00Z",
    topics: ["CRM", "Integration", "Automation"],
  },
  // Add more posts as needed to test pagination (up to 21 for the first page)
  {
    id: "post-5",
    slug: "ai-powered-customer-service",
    title: "Enhancing Customer Service with AI",
    thumbnailUrl: "/placeholder.svg",
    imageUrl: "/placeholder.svg",
    content: "<p>AI is not just for sales and marketing; it's transforming customer service...</p>",
    publishDate: "2025-04-22T10:00:00Z",
    topics: ["AI", "Customer Service"],
  },
  {
    id: "post-6",
    slug: "data-analytics-for-growth",
    title: "Leveraging Data Analytics for Business Growth",
    thumbnailUrl: "/placeholder.svg",
    imageUrl: "/placeholder.svg",
    content: "<p>Unlock the power of your data to make informed decisions and drive growth...</p>",
    publishDate: "2025-04-21T15:00:00Z",
    topics: ["Data Analytics", "Growth", "B2B"],
  },
];
