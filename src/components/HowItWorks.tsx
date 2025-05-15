import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect"; // Import GlowingEffect

const HowItWorks = () => {
  const steps = [{
    number: "01",
    title: "Understand Your Agency's Needs",
    description: "First, we dive deep to understand your agency's unique client acquisition challenges and growth goals. No generic solutions here.",
    benefits: ["Pinpoint current lead generation bottlenecks.", "Identify your ideal client profile for targeted outreach.", "Map a clear path to predictable lead flow."]
  }, {
    number: "02",
    title: "Build Your Custom Lead Engine",
    description: "We design a bespoke, AI-powered client acquisition system specifically for your agency, engineered to attract and qualify your ideal B2B clients.",
    benefits: ["A system built for *your* agency, not a one-size-fits-all.", "Leverage AI for smarter, more effective outreach.", "Seamless integration with your existing tools."]
  }, {
    number: "03",
    title: "Launch & Activate Your Leads",
    description: "Our team handles the full implementation, launching your new client acquisition system efficiently so you start seeing results, fast.",
    benefits: ["Hassle-free setup, managed entirely by us.", "Minimal disruption to your agency's operations.", "Begin receiving qualified leads consistently."]
  }, {
    number: "04",
    title: "Manage & Scale Your Growth",
    description: "We don't just build and leave. We continuously manage and optimize your system, ensuring a steady flow of leads and adapting to keep your agency growing.",
    benefits: ["Ongoing system management and optimization.", "Consistent results, month after month.", "Focus on your clients while we handle the lead flow."]
  }];

  return (
    <section id="how-it-works" className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute w-full h-full overflow-hidden top-0 left-0">
        <div className="blur-circle w-[500px] h-[500px] bg-standardOps-purple/10 -right-20 top-20"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-standardOps-purple uppercase font-medium tracking-wider mb-4">
            How We Work
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-heading font-bold mb-6">
            From Client Chaos to Consistent Growth: <span className="gradient-text">Our Managed System in Action</span> {/* Removed DFY */}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="text-xl text-white/70">
            See how our managed client acquisition system transforms your lead generation from a constant struggle into a reliable growth engine, step-by-step. {/* Removed Done-For-You */}
          </motion.p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            // 1. Outer wrapper for positioning context and key
            <div key={index} className="relative h-full">
              {/* 2. GlowingEffect component (sibling 1) */}
              <GlowingEffect
                disabled={false} // Enable the effect
                borderWidth={7}  // Increased significantly
                spread={50}      // Increased significantly
                blur={2}         // Decreased for sharpness
                className="rounded-2xl" // Removed opacity-70
              />
              {/* 3. Card container (sibling 2) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                // Outer container: transparent bg, border, padding, relative for internal absolute elements
                className="p-8 h-full group border border-white/10 bg-transparent transition-all duration-300 relative overflow-hidden rounded-2xl"
              >
                {/* Number background - relative to motion.div */}
                <div className="absolute -right-4 -top-8 opacity-10 text-[120px] font-heading font-bold">
                  {step.number}
                </div>

                {/* 4. Inner content wrapper: applies glass background, high z-index */}
                 <div className="relative z-50 h-full bg-white/5 backdrop-blur-md rounded-xl overflow-hidden">
                   {/* Apply padding here now */}
                   <div className="p-8">
                      <span className="block text-standardOps-purple mb-6 text-lg font-bold">
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-heading font-bold mb-4">
                        {step.title}
                      </h3>
                      <p className="text-white/70 mb-6">
                        {step.description}
                      </p>
                      <div className="space-y-3">
                        {step.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-standardOps-purple flex-shrink-0 mt-0.5" />
                            <p className="text-white/80">{benefit}</p>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
                 {/* Arrow - relative to motion.div */}
                 {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 text-standardOps-purple/50 z-50"> {/* Ensure arrow is high z-index */}
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
