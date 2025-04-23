"use client";

import { cn } from "@/lib/utils"; // Adjusted path
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Define the props type including the children function
interface HoverEffectProps {
  items: any[]; // Accept any array to determine the number of children
  className?: string;
  children: (item: any, index: number) => React.ReactNode; // Function to render each child
}

export const HoverEffect = ({
  items,
  className,
  children, // Destructure children here
}: HoverEffectProps) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        // Original grid layout, adjust columns as needed for your design
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-8", // Added gap like original HowItWorks
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx} // Use index as key since item content might not have unique id
          className="relative group block h-full w-full" // Removed p-2, ensure it takes full height/width
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                // Use consistent dark background for hover effect
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-2xl" 
                layoutId="hoverBackground" // Shared layout ID for animation
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          {/* Render the actual card content passed as children, wrapped in a relative div (removed z-20) */}
          <div className="relative h-full">
            {/* Call the children function correctly */}
            {children(item, idx)}
          </div>
        </div>
      ))}
    </div>
  );
};
