import React from 'react';

const QuantifiableImpactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-standardOps-dark-bg text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
          Quantifiable Impact: The Automation Advantage
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
           See the concrete results our clients achieve by embracing intelligent automation. The numbers speak for themselves.
         </p>
         {/* Removed grid layout for text-only, removed text-left */}
         <div className="max-w-3xl mx-auto space-y-4">
             <h3 className="text-2xl font-semibold gradient-text text-center">Unlock Tangible Gains</h3> {/* Added text-center */}
             <p className="text-white/80 text-left"> {/* Added text-left back to paragraph */}
               Companies embracing sales and marketing automation typically report significant gains, such as reducing time spent on repetitive tasks by up to <strong className="text-standardOps-purple">45%</strong> and seeing a <strong className="text-standardOps-purple">30%</strong> uplift in qualified lead throughput within the first three months.
            </p>
             <p className="text-white/80">
               This translates directly to increased capacity for innovation, improved client service levels, and a stronger bottom line. Don't miss out on these achievable advantages.
             </p> {/* Added text-left back to paragraph */}
           </div> {/* Closes max-w-3xl div */}
       </div> {/* Closes container div */}
    </section>
  );
};

export default QuantifiableImpactSection;
