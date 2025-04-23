
import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const HeroSection = () => {
  return <section className="relative min-h-screen grid-background overflow-hidden pt-28 fade-to-bottom">
      {/* Modified container: flex-col, items-center */}
      <div className="container mx-auto px-6 py-20 relative z-20 flex flex-col items-center gap-12">
        {/* Modified text container: w-full, text-center, items-center */}
        <div className="w-full space-y-8 text-center flex flex-col items-center">
          {/* Star rating - added justify-center */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="flex items-center justify-center gap-1"> {/* Added justify-center */}
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            <span className="ml-2 text-white/80 text-sm">4.9 (from 10+ reviews)</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            People who care <br />
            <span className="gradient-text">about your growth</span>
          </motion.h1>

          {/* Description */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="text-xl text-white/80">
            Powerful, AI-powered sales and marketing automation solutions to help agency owners
            simplify business growth.  <br />  <br />So that you can reclaim your time, boost productivity, and improve ROI across your sales and marketing departments.
          </motion.p>

          {/* Email input and CTA */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md"> {/* Added justify-center */}
            
            <a href="https://cal.com/safouan-chbabi/standardops-strategy" target="_blank" rel="noopener noreferrer">
              <MagneticButton>
                <button className="cta-button">Book your free Strategy Consultation</button>
              </MagneticButton>
            </a>
          </motion.div>

          {/* Privacy text */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="text-sm text-white/60">
            We care about your data in our <a href="#" className="text-standardOps-purple underline">privacy policy</a>.
          </motion.p>

          {/* Trust badges */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 1
        }} className="pt-4 flex flex-wrap gap-8 items-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-standardOps-purple to-[#FF7E5F] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">Trusted by 17+ B2B Agencies</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-standardOps-purple to-[#FF7E5F] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">In-depth analysis of your processes</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-standardOps-purple to-[#FF7E5F] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">No disruption to your work and seamless integration into your current tools</span>
            </div>
          </motion.div>
        </div>

        {/* Orb visualization removed */}
        
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0"></div>
    </section>;
};
export default HeroSection;
