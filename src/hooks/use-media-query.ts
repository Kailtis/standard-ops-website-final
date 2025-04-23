import { useState, useEffect } from 'react';

/**
 * Custom hook for tracking the state of a media query.
 * @param {string} query - The media query string to watch.
 * @returns {boolean} - True if the media query matches, false otherwise.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Ensure window is defined (for SSR compatibility)
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    // Function to update state based on query match
    const updateMatches = () => {
      setMatches(mediaQueryList.matches);
    };

    // Initial check
    updateMatches();

    // Listener for changes
    // Using the recommended addEventListener/removeEventListener approach
    const listener = () => updateMatches();
    mediaQueryList.addEventListener('change', listener);

    // Cleanup listener on component unmount
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]); // Re-run effect if query changes

  return matches;
}
