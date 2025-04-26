# Active Context (April 26, 2025 - Blog Feature Update)

## Current Focus
- Fixing scrolling to homepage sections after navigating back from other pages (e.g., /blog).

## Recent Changes (Blog Feature - April 26, 2025)
- **Git:** Created new branch `blog-page-branch`.
- **Routing (`App.tsx`):** Added routes for `/blog` and `/blog/:slug`.
- **Navbar (`Navbar.tsx`):**
    - Updated "Blog" link href to `/blog`.
    - Prepended `/` to homepage section links (e.g., `/#how-it-works`).
    - Replaced `<a>` tags with `<Link>` component for internal navigation.
    - Wrapped logo in `<Link to="/">`.
- **Homepage Scrolling (`Index.tsx`):**
    - Added `useEffect` hook using `useLocation` to detect URL hash changes.
    - Implemented logic to scroll to the corresponding element ID using `window.scrollTo` with a calculated offset (considering Navbar height).
- **Data Structure (`src/types/blog.ts`):** Defined `BlogPost` interface.
- **Mock Data (`src/data/blogPosts.ts`):** Created sample blog post data.
- **Pages:**
    - Created `src/pages/BlogPage.tsx` (main listing page).
    - Created `src/pages/BlogPostPage.tsx` (detail page).
- **Components (`src/components/blog/`):**
    - Created `BlogPostCard.tsx`.
    - Created `HighlightedPost.tsx` (and adjusted its image aspect ratio to `aspect-[2.5/1]` and max-width for better layout).
    - Created `BlogPostGrid.tsx`.
    - Created `TopicFilter.tsx`.
    - Created `PaginationComponent.tsx`.
- **Integration (`BlogPage.tsx`):** Integrated all blog components.

## Recent Changes (Initial Modifications - April 26, 2025)
- **Services Section (`ServicesSection.tsx`):** Removed the "Learn more" link from the service cards.
- **Hero Section (`HeroSection.tsx`):** Removed the text "We care about your data in our privacy policy."
- **Footer (`Footer.tsx`):**
    - Added a LinkedIn icon with the correct link (`https://fr.linkedin.com/in/safouan-chbabi-624551197`).
    - Replaced the original Facebook icon with an imported X logo (`Untitled design.png`). The link remains `#` as requested.
    - Removed the duplicate Twitter bird icon.
- **FAQ Section (`Index.tsx`):**
    - Changed the last question from "What does the monthly support fee cover after the initial setup?" to "What is your pricing structure?".
    - Updated the answer for the last question to explain the personalized pricing approach.
- **Navbar (`Navbar.tsx`):** Removed the "Pricing" link from the navigation items.

## Next Steps
- Verify homepage section scrolling fix locally (run `bun run dev`, navigate to `/blog`, click homepage links like "How it Works").
- Update Memory Bank (`progress.md`, `systemPatterns.md`).
- Await feedback on the scrolling fix or further instructions.

## Project Insights
- The project uses React with TypeScript and Vite.
- Components are located in `src/components/`.
- Styling likely uses Tailwind CSS (based on class names).
- Images are imported directly into components.
