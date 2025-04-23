import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

const navLinks = [
  { href: "#how-it-works", label: "How it Works" },
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#blog", label: "Blog" }, // Assuming blog section exists or will be added
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // State for hover effect

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          <span className="text-2xl font-heading font-bold bg-gradient-to-r from-standardOps-purple to-[#FF7E5F] bg-clip-text text-transparent">
            Standard Ops
          </span>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex items-center gap-1" // Reduced gap for tighter spacing with hover effect padding
        >
          {navLinks.map((link, index) => (
            <div
              key={link.href}
              className="relative group px-3 py-2" // Add padding for hover effect space
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-md" // Use rounded-md for nav links
                    layoutId="navbarHoverBackground" // Shared layout ID
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              <a 
                href={link.href} 
                className="text-white/80 hover:text-white transition-colors relative z-10 text-sm" // Added relative z-10 and text-sm
              >
                {link.label}
              </a>
            </div>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <a href="https://cal.com/safouan-chbabi/standardops-strategy" target="_blank" rel="noopener noreferrer">
            <MagneticButton>
              <Button
                className="bg-gradient-to-r from-standardOps-purple to-[#FF7E5F] hover:opacity-90 text-white rounded-full px-6 py-2 transition-all duration-300 hover:shadow-glow-mix"
              >
                Start Now
              </Button>
            </MagneticButton>
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
