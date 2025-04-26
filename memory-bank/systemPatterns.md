# System Patterns (April 26, 2025)

## Architecture
- Frontend web application built with React and Vite.
- Component-based architecture.

## Key Technical Decisions
- Use of TypeScript for type safety.
- Styling implemented with Tailwind CSS utility classes.
- Framer Motion used for animations.
- Shadcn/ui components likely used (based on `components/ui` directory structure and common React practice).

## Design Patterns
- **Component Structure:** Components are organized within `src/components/` (general), `src/components/ui/` (Shadcn primitives), and `src/components/blog/` (blog-specific UI). Pages are in `src/pages/`.
- **Styling:** Utility-first CSS via Tailwind. Custom styles might be in `.css` files (`App.css`, `index.css`).
- **State Management:** Primarily component-local state (`useState`, `useEffect`, `useMemo`) used in `BlogPage.tsx` for filtering and pagination. No global state managers yet.
- **Routing:** `react-router-dom` v6 is used for client-side routing. Routes are defined in `App.tsx`. Blog routes include `/blog` and `/blog/:slug`. Navigation between routes and to homepage sections is handled using the `<Link>` component. Homepage section links are formatted as `/#section-id`. Scrolling to homepage sections after navigation (e.g., from `/blog` to `/#faq`) is handled manually in `Index.tsx` using `useLocation` and `window.scrollTo` with a calculated offset.
- **Data Handling (Blog):** Currently uses a mock data array exported from `src/data/blogPosts.ts`. Data fetching/filtering logic resides within the `BlogPage` component.

## Component Relationships
- `App.tsx` orchestrates main layout and routing, rendering `IndexPage`, `BlogPage`, `BlogPostPage`, or `NotFound`.
- `IndexPage` contains the logic (`useEffect`, `useLocation`, `window.scrollTo`) to handle scrolling to sections based on the URL hash.
- Specific sections (Hero, Services, Footer, Navbar) are encapsulated in their own components.
- `Navbar` uses `<Link>` for navigation to different pages (`/blog`) and homepage sections (`/#section-id`). The logo also links to `/`.
- `BlogPage` renders `Navbar`, `Footer`, `TopicFilter`, `HighlightedPost`, `BlogPostGrid`, and `PaginationComponent`.
- `BlogPostGrid` renders multiple `BlogPostCard` components.
- `BlogPostPage` renders `Navbar`, `Footer`, and the specific post content. It includes a `<Link>` back to `/blog`.
- `BlogPostCard` and `HighlightedPost` link to `BlogPostPage` using `react-router-dom`'s `<Link>`.
- UI elements (buttons, cards, pagination) are reused from `src/components/ui/` (Shadcn).

## Critical Implementation Paths
- Rendering of main page sections.
- Handling user interactions (e.g., button clicks, form submissions - though none modified yet).
- Displaying dynamic data (e.g., services list, testimonials - structure observed but not modified).
- Image loading (using direct imports).
