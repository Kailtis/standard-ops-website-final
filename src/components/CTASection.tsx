import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors"; // Import Meteors
import { MagneticButton } from "@/components/ui/magnetic-button"; // Corrected: Named import
 
const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="blur-circle w-[200px] h-[200px] bg-standardOps-purple/20 left-0 top-[350px]"></div> {/* Halved size & lowered significantly */}
      <div className="blur-circle w-[200px] h-[200px] bg-[#FF7E5F]/20 right-0 bottom-0"></div> {/* Halved size */}
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-16 text-center border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-standardOps-purple via-standardOps-purple-light to-[#FF7E5F]"></div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Stop Worrying About Leads. <span className="gradient-text">Start Growing Your Agency.</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let us build and manage your client acquisition system. Get a predictable stream of qualified leads and focus on what you do best: delivering for your B2B clients. {/* Removed DFY */}
          </p>

          <div className="flex justify-center"> {/* Removed gap and flex-col/sm:flex-row */}
          <a href="https://cal.com/safouan-chbabi/standardops-strategy" target="_blank" rel="noopener noreferrer">
            <MagneticButton>
              <button className="cta-button">
                Book Your Free Growth Strategy Session
              </button>
            </MagneticButton>
          </a>
            {/* Removed Learn More button */}
          </div>
          {/* Add Meteors component inside the card */}
          <Meteors number={30} />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
