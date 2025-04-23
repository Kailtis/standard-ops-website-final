"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the content area div
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the scroll container
  const [height, setHeight] = useState(0); // Use 'height' consistent with original example

  useEffect(() => {
    const calculateHeight = () => {
      if (contentRef.current) {
        // Use getBoundingClientRect().height as in the original example
        const rect = contentRef.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && contentRef.current) {
       resizeObserver = new ResizeObserver(calculateHeight);
       resizeObserver.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener('resize', calculateHeight);
       if (resizeObserver && contentRef.current) {
         resizeObserver.unobserve(contentRef.current);
      }
    };
  }, [contentRef]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Revert offset to original example's value
    offset: ["start 10%", "end 50%"],
  });

  // Ensure height is not 0
  const validHeight = height > 0 ? height : 1;

  // Use 'height' state variable consistent with original example
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, validHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]); // Revert opacity fade

  return (
    // Outer container for scroll tracking
    <div ref={containerRef} className="w-full font-sans md:px-10">
      {/* Inner container holding the timeline items and the animated bar */}
      <div ref={contentRef} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            // Reverted spacing closer to original, removed min-h-screen
            className="flex justify-start md:gap-10 pt-10 md:pt-60" // Using pt-60 for spacing
          >
            {/* Sticky container for title and dot */}
            {/* Reverted top offset closer to original */}
            {/* Adjusted widths: title narrower, content wider */}
            <div className="sticky flex flex-col md:flex-row z-10 items-center top-20 md:top-40 self-start max-w-xs lg:max-w-sm md:w-1/4 lg:w-1/5">
              {/* Dot element */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-standardOps-dark-bg flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              {/* Title */}
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl lg:text-4xl font-bold text-neutral-500 dark:text-neutral-400 ">
                {item.title}
              </h3>
            </div>

            {/* Content area */}
             {/* Adjusted widths: title narrower, content wider */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full md:w-3/4 lg:w-4/5">
              {/* Mobile Title */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-400">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        {/* The animated timeline bar */}
        <div
          style={{
            height: `${validHeight}px`, // Use 'height' state variable
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-standardOps-purple via-purple-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
