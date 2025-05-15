import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Added motion import
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"; // Use the created card

// Extracted and adapted testimonial data
export const testimonialsData: Array<{ author: TestimonialAuthor; text: string; href?: string }> = [ // Added export
  {
    author: {
      name: "Sarah Miller",
      position: "Director, ScaleUp Agency Solutions",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    text: "Before Standard Ops, our client pipeline was a rollercoaster – feast or famine. Now, their client acquisition system delivers a steady stream of qualified B2B agency leads. We're no longer scrambling for new business and can finally focus on strategic growth. It's been a game-changer for our agency's stability." // Removed DFY
  },
  {
    author: {
      name: "David Lee",
      position: "Founder, Convert Digital Marketing",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    text: "We were drowning in manual outreach that yielded little. Standard Ops took over our lead generation, and the quality of opportunities we're seeing is incredible. Our team now spends their time on closing deals with genuinely interested prospects, not chasing dead ends. Our growth trajectory has completely changed."
  },
  {
    author: {
      name: "Jessica Chen",
      position: "Partner, Creative Impact Agency",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    text: "The constant pressure of finding new clients was burning us out. Standard Ops' client acquisition system has been a lifesaver. We now have a predictable flow of new projects, allowing us to dedicate our energy to delivering amazing work for our existing B2B clients. I wish we'd found them sooner!"
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
  title = "What Our Clients Say", // Default title
  description = "B2B agencies like yours are finally breaking free from the 'feast or famine' cycle. Here's how our managed client acquisition systems are delivering predictable growth.", // New default description, removed DFY
  testimonials, 
  className
}: TestimonialsSectionProps) {
  // If testimonials prop is not provided, use the default testimonialsData
  const displayTestimonials = testimonials || testimonialsData;

  return (
    <section id="testimonials" className={cn(
      "relative overflow-hidden", 
      "py-12 sm:py-24 md:py-32", 
      className
    )}>
      {/* Enhanced background blur effects */}
      <div className="blur-circle w-[400px] h-[400px] bg-gradient-to-br from-[#9b87f5]/20 via-[#D6BCFA]/15 to-[#FF7E5F]/20 -left-32 top-40"></div>
      <div className="blur-circle w-[350px] h-[350px] bg-gradient-to-tl from-[#F97316]/20 via-[#D6BCFA]/15 to-[#9b87f5]/20 right-0 bottom-40"></div>
      <div className="container mx-auto flex max-w-container flex-col items-center gap-8 text-center sm:gap-12 relative z-10">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-[720px] text-3xl font-heading font-semibold leading-tight sm:text-5xl sm:leading-tight"
          >
             <span className="gradient-text">{title}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg max-w-[600px] text-white/80 sm:text-xl"
          >
            {description}
          </motion.p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex w-full overflow-hidden p-2 [--gap:1.5rem] [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] flex-row animate-marquee group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, repeatIndex) =>
                displayTestimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${repeatIndex}-${i}`} 
                    aria-hidden={repeatIndex > 0 ? "true" : undefined} 
                    {...testimonial}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection;
