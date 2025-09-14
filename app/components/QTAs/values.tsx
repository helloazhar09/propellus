import React from 'react';

const PropellusMetricsAndValues = () => {
  return (
    <div className="bg-white">
      {/* Top Section */}
      <section className="bg-[#1C3F5D] text-white p-6 md:p-12 lg:p-24">
        <div className="container mx-auto text-center">
          <p className="text-sm uppercase font-semibold text-gray-300 tracking-wider mb-2">
            How We Help
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
            Enabling travel agents to scale fulfillment and reduce business cost
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="bg-white rounded-xl p-6 w-full max-w-xs text-center">
              <h3 className="text-3xl font-bold text-[#1C3F5D]">60%</h3>
              <p className="text-sm font-light mt-2 text-[#1C3F5D]">
                Reduction in payroll cost
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 w-full max-w-xs text-center">
              <h3 className="text-3xl font-bold text-[#1C3F5D]">500%</h3>
              <p className="text-sm font-light mt-2 text-[#1C3F5D]">
                Increase in productivity
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 w-full max-w-xs text-center">
              <h3 className="text-3xl font-bold text-[#1C3F5D]">70%</h3>
              <p className="text-sm font-light mt-2 text-[#1C3F5D]">
                Fewer errors in document validation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-white p-6 md:p-12 lg:p-24">
        <div className="container mx-auto">
          <p className="text-sm uppercase font-semibold text-gray-500 tracking-wider text-center mb-2">
            How It Works
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center mb-12">
            What We Value
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-start space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="/images/frame3.png" alt="Customer First" className="w-full h-auto object-cover"/>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Customer first
              </h3>
              <p className="text-sm text-gray-600">
                We prioritize our customers' needs and strive to exceed their expectations at every point.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="/images/frame4.png" alt="Transparency" className="w-full h-auto object-cover"/>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Transparency
              </h3>
              <p className="text-sm text-gray-600">
                We believe in being honest, ethical, and transparent in all our interactions.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="/images/frame5.png" alt="Ownership" className="w-full h-auto object-cover"/>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Ownership
              </h3>
              <p className="text-sm text-gray-600">
                We take responsibility for our actions, decisions, and outcomes.
              </p>
            </div>
            {/* ✅ Fixed only the 4th image */}
            <div className="flex flex-col items-start space-y-4">
              <div className="w-full h-76 flex items-center justify-center rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="/images/frame6.png" alt="Quality" className="max-h-full object-contain"/>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Quality
              </h3>
              <p className="text-sm text-gray-600">
                We are dedicated to providing high-quality products and services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropellusMetricsAndValues;
