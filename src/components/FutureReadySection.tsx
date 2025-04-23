import React from 'react';

const FutureReadySection = () => {
  return (
    <section className="py-16 md:py-24 bg-standardOps-dark-bg text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
          Beyond Efficiency: Building a Future-Ready Agency
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
           Automation isn't just about cutting costs today; it's about building the foundation for tomorrow's success and resilience.
         </p>
         {/* Removed grid layout for text-only, removed text-left */}
         <div className="max-w-3xl mx-auto space-y-4">
             <h3 className="text-2xl font-semibold gradient-text text-center">Scale Smarter, Compete Harder</h3> {/* Added text-center */}
             <p className="text-white/80 text-left"> {/* Added text-left back to paragraph */}
               In a dynamic market, the ability to scale operations without proportionally increasing overhead is crucial. AI-powered automation provides the operational backbone necessary to not only handle current demands but to seize future opportunities and maintain a competitive edge.
            </p>
             <p className="text-white/70 italic">
               Position your agency for sustainable growth and long-term relevance.
             </p> {/* Added text-left back to paragraph */}
           </div> {/* Closes max-w-3xl div */}
       </div> {/* Closes container div */}
     </section>
  );
};

export default FutureReadySection;
