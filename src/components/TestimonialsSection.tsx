import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Added motion import
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"; // Use the created card

// Extracted and adapted testimonial data
export const testimonialsData: Array<{ author: TestimonialAuthor; text: string; href?: string }> = [ // Added export
  {
    author: {
      name: "Sarah Johnson",
      position: "CMO, TechGrowth Solutions",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    text: "Standard Ops transformed our lead gen operations. We're able to set-up, launch and test new campaigns in less than 2 hours, whereas previously it took us 3 to 5 days of manual list building and campaign set-up + launch. Huge time savers, and it seems deliverability improved although I'm not sure what they did, but I won't complain!",
  },
  {
    author: {
      name: "Michael Chen",
      position: "Sales Director, Innovate Partners",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    text: "The automation solutions Standard Ops implemented have simplified our sales process so much! Our sales teams was previously spending probably half of their time on stuff that wasn't selling and reaching out to our ideal prospects. It took a few days of training for our reps to get the hang of the new systems, but now they handle the rote work in just a few minutes every day, not hours. Couldn't be happier with the results and effectiveness of the automations!",
  },
  {
    author: {
      name: "Emma Rodriguez",
      position: "Agency Director, Pulse Creative",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    text: "I can't even imagine going back to our old way of doing things before working with you guys. We used to spend 1 to 2 weeks to finalize the entire processes from client onboarding, back and forths, and then creating and sending the weekly and sometimes daily reports. Probably around 15 hours per week total were wasted across our team members on these low leverage activities. That's not the case anymore, and I absolutely love it!",
  }
];

// Define the props interface matching the new component structure
interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

// Use the new component structure provided by the user
export function TestimonialsSection({
  title = "What Our Clients Say", // Added default back for clarity if used standalone
  description = "Hear from agency owners who transformed their business with Standard Ops.", // Added default back
  testimonials, // Removed default
  className
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className={cn(
      "relative overflow-hidden", // Removed background gradient
      "py-12 sm:py-24 md:py-32", // Keep padding
      className
    )}>
      {/* Enhanced background blur effects */}
      <div className="blur-circle w-[400px] h-[400px] bg-gradient-to-br from-[#9b87f5]/20 via-[#D6BCFA]/15 to-[#FF7E5F]/20 -left-32 top-40"></div>
      <div className="blur-circle w-[350px] h-[350px] bg-gradient-to-tl from-[#F97316]/20 via-[#D6BCFA]/15 to-[#9b87f5]/20 right-0 bottom-40"></div>
      <div className="container mx-auto flex max-w-container flex-col items-center gap-8 text-center sm:gap-12 relative z-10"> {/* Added container, adjusted gap, added z-index */}
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
          {/* Use title prop with animation */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-[720px] text-3xl font-heading font-semibold leading-tight sm:text-5xl sm:leading-tight" // Added font-heading
          >
             <span className="gradient-text">{title}</span>
          </motion.h2>
          {/* Use description prop with animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg max-w-[600px] text-white/80 sm:text-xl" // Changed color, adjusted size
          >
            {description}
          </motion.p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* Parent container for overflow and fades */}
          <div className="group flex w-full overflow-hidden p-2 [--gap:1.5rem] [--duration:40s]"> {/* Increased gap and duration */}
            {/* Single inner container with content repeated multiple times and animation */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] flex-row animate-marquee group-hover:[animation-play-state:paused]">
              {/* Repeat content 4 times */}
              {[...Array(4)].map((_, repeatIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${repeatIndex}-${i}`} // Unique key for each instance
                    aria-hidden={repeatIndex > 0 ? "true" : undefined} // Hide repetitions from screen readers
                    {...testimonial}
                  />
                ))
              )}
            </div>
          </div>

          {/* Fades for marquee edges removed */}
        </div>
      </div>
    </section>
  )
}

// Export default for compatibility if needed elsewhere, though named export is preferred
export default TestimonialsSection;
