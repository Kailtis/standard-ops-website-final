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
      question: "What is your pricing structure?",
      answer: "Given the personalize nature of our work that caters to each client specific need, we didn't feel comfortable advertising a clear pricing structure in our website, because that would be misleading. You can be assured that whatever it ends up being with you, it will be absolutely fair and reflective of the value provided to your company. If you absolutely wish to know, you can send us an email at 'support@standardops.dev' and we'll do our best to give you more information. Some clients projects are low 4 figures, some are high 4, some are low 5. It mostly depends on the scope and nature of the project. We hope this was satisfactory as a response.",
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
