import React from 'react';

const ShiftingLandscapeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-standardOps-dark-bg text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
          The Shifting Landscape: Agility in the Age of AI
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
           AI and automation are rapidly changing industry benchmarks for speed, efficiency, and client acquisition. This isn't a disruption to fear, but an evolution to embrace.
         </p>
         {/* Removed grid layout for text-only, removed text-left */}
         <div className="max-w-3xl mx-auto space-y-4">
             <h3 className="text-2xl font-semibold gradient-text text-center">Redefining Operational Efficiency</h3> {/* Added text-center */}
             <p className="text-white/80 text-left"> {/* Added text-left back to paragraph */}
               Forward-thinking B2B leaders are leveraging intelligent automation to redefine operational efficiency. This allows them to react faster, scale smarter, and dedicate more resources to strategic growth initiatives, setting new standards in agency operations and client delivery.
            </p>
             <p className="text-white/70 italic">
               Are your processes keeping pace with the new benchmarks being set?
             </p> {/* Added text-left back to paragraph */}
           </div> {/* Closes max-w-3xl div */}
        </div> {/* Closes container div */}
    </section>
  );
};

export default ShiftingLandscapeSection;
