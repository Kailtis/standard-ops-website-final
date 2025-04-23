"use client";

import { buttonVariants } from "@/components/ui/button"; // Adjusted path
import { Label } from "@/components/ui/label"; // Adjusted path
import { Switch } from "@/components/ui/switch"; // Adjusted path
import { useMediaQuery } from "@/hooks/use-media-query"; // Adjusted path
import { cn } from "@/lib/utils"; // Adjusted path
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
// import Link from "next/link"; // Removed next/link
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
// import NumberFlow from "@number-flow/react"; // Removed NumberFlow import

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

// Renamed component function to match filename convention
export function PricingSection({ 
  plans,
  title = "Simple, Transparent Pricing",
  description = "",
}: PricingProps) { // Corrected typo here
  // Removed isMonthly state, switchRef, and handleToggle function
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    // Added section ID back
    <section id="pricing" className="container py-20"> 
      <div className="text-center space-y-4 mb-12"> {/* Adjusted mb if switch is removed */}
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Removed the annual billing switch div */}

      {/* Adjust grid for single card and center it */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:max-w-md mx-auto mt-12"> {/* Added margin-top */}
        {plans.map((plan, index) => ( // Index is now always 0, but keep map for structure
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }} // Start with opacity 0
            whileInView={{
              y: 0, // Simplified y animation
              opacity: 1,
              // Removed x, scale, rotate-y animations based on index
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8, // Adjusted duration
              type: "spring",
              stiffness: 100,
              damping: 20, // Adjusted damping
              delay: 0.2, // Adjusted delay
            }}
            className={cn(
              `rounded-2xl border-[1px] p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative`,
              plan.isPopular ? "border-primary border-2" : "border-border",
              "flex flex-col"
              // Removed conditional mt-5
              // Removed z-index and transform logic based on index
            )}
          >
            {plan.isPopular && ( // Keep popular badge logic if needed
              <div className="absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                <Star className="text-primary-foreground h-4 w-4 fill-current" />
                {/* Removed "Popular" span */}
              </div>
            )}
            <div className="flex-1 flex flex-col">
              {/* Removed plan name paragraph */}
              {/* Replaced price display with new structure */}
              <div className="mt-6 text-center"> {/* Adjusted container */}
                <p className="text-3xl font-bold tracking-tight text-foreground"> {/* Adjusted size */}
                  $7500 setup fee
                </p>
                <p className="text-lg text-muted-foreground mt-1"> {/* Adjusted size and added margin */}
                  + $1200/mo for support and continuous improvements
                </p>
              </div>

              {/* Removed "billed monthly" paragraph */}

              <ul className="mt-5 gap-2 flex flex-col"> {/* Consider adjusting mt if billing period text removed */}
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-4" />

              {/* Replaced Link with standard <a> tag */}
              <a
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-primary-foreground",
                  plan.isPopular
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground"
                )}
              >
                {plan.buttonText}
              </a>
              {/* Removed plan description paragraph */}
            </div>
          </motion.div>
        ))}
      </div>
    </section> // Added missing closing tag
  );
}

// Keep named export consistent with filename
export default PricingSection;
