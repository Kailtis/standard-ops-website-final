import { motion } from "framer-motion";
import { Zap, ArrowRight, Rocket, BarChart3, Layers } from "lucide-react";
import { GlareCard } from "@/components/ui/glare-card"; // Import GlareCard

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  index
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} viewport={{
    once: true,
    margin: "-100px"
  }} className="h-full"> {/* Removed glass-card and padding from motion.div */}
    <GlareCard className="h-full group"> {/* Added GlareCard wrapper, kept h-full and group */}
      {/* Content moved inside GlareCard */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-standardOps-purple to-[#FF7E5F] flex items-center justify-center mb-6 group-hover:shadow-glow-purple transition-all duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-heading font-bold mb-4">{title}</h3>
      <p className="text-white/70 mb-6">{description}</p>
      {/* Learn more link removed */}
    </GlareCard>
  </motion.div>;
};

const ServicesSection = () => {
  const services = [{
    icon: Zap,
    title: "Managed Lead Generation", // Changed from "DFY Lead Generation"
    description: "Tired of manual outreach? Our AI systems find and qualify leads, delivering consistent opportunities so you can escape the 'feast or famine' cycle."
  }, {
    icon: Layers,
    title: "Focus on Clients, Not Prospecting",
    description: "We manage your top-of-funnel, allowing your team to concentrate on delivering exceptional client work and growing your agency."
  }, {
    icon: BarChart3,
    title: "Scalable Growth, Systematized",
    description: "Reliant on referrals? Our systems provide a proactive source of new business, ending unpredictable lead flow and building sustainable growth."
  }, {
    icon: Rocket,
    title: "Expert Systems, Zero Headaches",
    description: "Lack lead gen expertise? We provide a fully managed client acquisition solution, taking the operational burden off your shoulders."
  }];
  
  return <section id="features" className="section relative overflow-hidden pt-20" style={{ // Changed pt-0 to pt-20
    zIndex: 1
  }}>
      {/* Enhanced background blur effects to match the hero section */}
      <div className="blur-circle w-[400px] h-[400px] bg-gradient-to-br from-[#9b87f5]/20 via-[#D6BCFA]/15 to-[#FF7E5F]/20 -left-32 top-40"></div> {/* Shrunk and raised */}
      <div className="blur-circle w-[350px] h-[350px] bg-gradient-to-tl from-[#F97316]/20 via-[#D6BCFA]/15 to-[#9b87f5]/20 right-0 bottom-40"></div> {/* Adjusted size & changed bottom-0 to bottom-40 */}

      <div className="container mx-auto relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="text-standardOps-purple uppercase font-medium tracking-wider mb-4">
            Our Services
          </motion.p>
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="text-4xl md:text-5xl font-heading font-bold mb-6">
            End the Feast or Famine: Consistent Client Acquisition for Your B2B Agency
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="text-xl text-white/70">
            Stop chasing leads and start focusing on what you do best. We deliver a steady stream of qualified opportunities directly to your B2B agency through our intelligent, managed client acquisition systems. {/* Changed Done-For-You to managed */}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} index={index} />)}
        </div>
      </div>
    </section>;
};

export default ServicesSection;
