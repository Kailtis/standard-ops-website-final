import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect"; // Import GlowingEffect

const HowItWorks = () => {
  const steps = [{
    number: "01",
    title: "Analyze",
    description: "We conduct a thorough analysis of your current sales & marketing processes to identify the main constraints.",
    benefits: ["Custom process mapping", "Efficiency gap analysis", "Technology infrastructure review"]
  }, {
    number: "02",
    title: "Design",
    description: "Our experts design tailored automation solutions that integrate seamlessly within your existing systems.",
    benefits: ["Customized workflow design", "AI integration planning", "User experience optimization"]
  }, {
    number: "03",
    title: "Implement",
    description: "We deploy and integrate your automation solutions with minimal disruption to your day-to-day operations.",
    benefits: ["Seamless system integration", "Employee training", "Comprehensive documentation"]
  }, {
    number: "04",
    title: "Optimize",
    description: "Continuous monitoring and refinement ensure your automation systems evolve with your business needs.",
    benefits: ["Performance analytics", "Ongoing support", "Continuous improvement cycles"]
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
            Your Path to <span className="gradient-text">Effortless Client Acquisition</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="text-xl text-white/70">
            Our in-depth approach makes implementing automation simple and effective, letting you focus on what matters most.
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
