import React, { useEffect } from "react"; // Added React import
import { useLocation } from "react-router-dom"; // Import useLocation
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
  const location = useLocation(); // Get location object

  useEffect(() => {
    // Update page title
    document.title = "Standard Ops | AI Automation Agency";
  }, []); // Run only once on mount for title

  // Effect to handle scrolling to hash sections
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Use setTimeout to allow elements to render after navigation
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Calculate offset, potentially adjusting for fixed navbar height
          const navbar = document.querySelector('header'); // Select the header element
          const navbarHeight = navbar ? navbar.offsetHeight : 0; // Get its height, default to 0
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight - 20; // Subtract navbar height and add some padding (e.g., 20px)

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100); // Small delay
    }
  }, [location.hash]); // Re-run only if the hash changes

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
      question: "What exactly does Standard Ops do for B2B agencies like mine?",
      answer: "We solve your biggest client acquisition challenge: the 'feast or famine' cycle. Our intelligent, managed systems deliver a consistent stream of qualified leads directly to your B2B agency, so you can focus on client work, not chasing new business." // Removed DFY
    },
    {
      question: "Is this complicated to set up? We're busy and don't have a tech team.",
      answer: "Not at all. We handle everything. From understanding your needs to building, launching, and managing your custom client acquisition system, our experts take care of the heavy lifting with minimal disruption to your agency." // Removed 'Done-For-You'
    },
    {
      question: "What results can our agency expect from your lead generation systems?", // Removed DFY
      answer: "Our B2B agency clients typically see a predictable flow of qualified leads, an end to inconsistent referrals, and more time to focus on billable work. This means sustainable growth and less stress about where the next client is coming from."
    },
    {
      question: "Our agency relies heavily on referrals. How can you help?",
      answer: "Referrals are great, but often unpredictable. Our managed systems provide a proactive, scalable lead source to complement referrals, giving your B2B agency consistent growth opportunities and reducing dependency on sporadic client introductions." // Removed DFY
    },
    {
      question: "What's the investment for a managed client acquisition system for my agency?", // Removed DFY
      answer: "Our managed client acquisition systems are tailored to each B2B agency's specific needs and goals, so pricing is customized. We ensure it's fair and reflects the significant value and predictable growth we deliver. Projects can range based on scope, but we'll provide a clear proposal after understanding your requirements. Feel free to email 'support@standardops.dev' for a preliminary discussion." // Removed DFY
    },
  ];

  return (
    <div className="bg-standardOps-dark-bg text-white min-h-screen">
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorks /> {/* Remove incorrect id prop */}
        {/* Pass required props */}
        <TestimonialsSection
          // Remove incorrect id prop
          title="Success Stories from Our Clients"
          description="Hear from businesses that simplified their ops, reclaimed valuable time, and improved efficiency thanks to our solutions."
          testimonials={testimonialsData}
        />
        {/* PricingSection removed */}

        {/* Removed ShiftingLandscapeSection, QuantifiableImpactSection, FutureReadySection */}
        {/* Assuming Features section would be part of Services or another component */}
        {/* Add id="features" to the relevant section component if it exists */}

        <FaqSection
          id="faq" // ID already exists
          title="Frequently Asked Questions"
          description="Your questions about achieving predictable B2B agency growth, answered."
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
