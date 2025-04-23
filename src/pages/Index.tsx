import React, { useEffect } from "react"; // Added React import
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
// Import the named export and the data (now correctly exported)
import { TestimonialsSection, testimonialsData } from "@/components/TestimonialsSection";
// PricingSection import removed
// Removed ShiftingLandscapeSection, QuantifiableImpactSection, FutureReadySection imports
import { FaqSection } from "@/components/FaqSection"; // Added FAQ import
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Standard Ops | AI Automation Agency";
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  // Demo data for Pricing Section
  const demoPlans = [
    {
      name: "STARTER",
      price: "50",
      yearlyPrice: "40",
      period: "per month",
      features: [
        "Up to 10 projects",
        "Basic analytics",
        "48-hour support response time",
        "Limited API access",
        "Community support",
      ],
      description: "Perfect for individuals and small projects",
      buttonText: "Start Free Trial",
      href: "/sign-up", // Adjust href as needed
      isPopular: false,
    },
    {
      name: "PROFESSIONAL",
      price: "99",
      yearlyPrice: "79",
      period: "per month",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "24-hour support response time",
        // "Full API access", // Removed
        "Priority support",
        // "Team collaboration", // Removed
        "Custom integrations",
      ],
      description: "Ideal for growing teams and businesses",
      buttonText: "Get Started",
      href: "/sign-up", // Adjust href as needed
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      price: "299", // Or handle "Contact us" logic if needed
      yearlyPrice: "239", // Or handle "Contact us" logic if needed
      period: "per month",
      features: [
        "Everything in Professional",
        "Custom solutions",
        "Dedicated account manager",
        "1-hour support response time",
        "SSO Authentication",
        "Advanced security",
        "Custom contracts",
        "SLA agreement",
      ],
      description: "For large organizations with specific needs",
      buttonText: "Contact Sales",
      href: "/contact", // Adjust href as needed
      isPopular: false,
    },
  ];

  // Updated FAQ Data
  const DEMO_FAQS = [
    {
      question: "What specific problems does Standard Ops solve for agencies?",
      answer: "Standard Ops tackles common agency bottlenecks like inefficient lead generation, time-consuming manual sales tasks, inconsistent marketing follow-up, and difficulty scaling operations. Our AI automation solutions streamline these processes, freeing up your team to focus on high-value activities and client relationships.",
    },
    {
      question: "Will the implementation process disrupt my current operations?",
      answer: "Our process is designed for minimal disruption. We start with a discovery call and strategy session to understand your unique needs. Implementation involves configuring and integrating the automation tools seamlessly with your existing systems. We handle the technical setup and provide training, ensuring a smooth transition.",
    },
    {
      question: "What kind of results can I realistically expect ?",
      answer: "While results vary, our clients typically see significant improvements in lead quality and quantity, reduced sales cycle times, increased marketing engagement, and substantial time savings for their teams. During our strategy session, we'll discuss potential ROI based on your specific goals and current processes.",
    },
    {
      question: "Can you integrate with the CRM and marketing tools we already uses?",
      answer: "Absolutely. We prioritize seamless integration. Our solutions are designed to work with popular CRMs, email marketing platforms, and other tools commonly used by agencies. We'll confirm compatibility and map out the integration plan during the strategy phase.",
    },
    {
      question: "What does the monthly support fee cover after the initial setup?",
      answer: "The monthly fee ensures your automation systems run smoothly and stay optimized. It includes ongoing monitoring, technical support, performance analysis, and proactive adjustments to improve results and adapt to any changes in your business or the market.",
    },
  ];

  return (
    <div className="bg-standardOps-dark-bg text-white min-h-screen">
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorks />
        {/* Pass required props */}
        <TestimonialsSection 
          title="Success Stories from Our Clients"
          description="Hear from businesses that simplified their ops, reclaimed valuable time, and improved efficiency thanks to our solutions."
          testimonials={testimonialsData}
        />
        {/* PricingSection removed */}

        {/* Removed ShiftingLandscapeSection, QuantifiableImpactSection, FutureReadySection */}
        
        <FaqSection
          id="faq" // Added ID for navigation link
          title="Frequently Asked Questions"
          description="Everything you need to know about our platform"
          items={DEMO_FAQS}
          contactInfo={{
            title: "Still have questions?",
            description: "We're here to help you",
            buttonText: "Contact Support",
            onContact: () => console.log("Contact support clicked"), // Placeholder action
          }}
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
