import React from 'react';

const InvestInPropellus = () => {
  return (
    <div className="relative py-12 px-4 md:px-8 overflow-hidden bg-[#1C3F5D]">
      {/* Background vectors */}
      <img
        src="/images/formleftVector.png"
        alt="Left background shading"
        className="absolute top-0 left-0 w-2/4 h-full object-cover z-10 opacity-100"
      />
      <img
        src="/images/formrightVector.png"
        alt="Right background shading"
        className="absolute bottom-0 right-0 w-1/4 h-full object-cover z-0 opacity-120"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-2 lg:space-x-6">
        {/* Left content section */}
        <div className="text-center lg:text-left flex-1 px-4">
          <p className="text-white text-base font-semibold mb-3">INVEST IN PROPELLUS</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Second Angel <br /> Round Now <br /> Open
          </h2>
          <div className="flex justify-center space-x-2 mt-4">
  <div className="flex justify-center mt-4">
  <img
    src="/images/Angel.png"
    alt="Angel icon"
    className="w-[170px] h-auto"
  />
</div>



</div>

        </div>

        {/* Right form section */}
        <div className="flex-1 w-full max-w-md lg:max-w-xl">
          <div className="bg-white p-8 md:p-12 rounded-[20px] shadow-2xl">
            <h3 className="text-center text-2xl font-semibold text-gray-800 mb-6">
              Tell us about you
            </h3>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label htmlFor="your-name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="your-name"
                    name="your-name"
                    placeholder="e.g John Doe"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company-name"
                    name="company-name"
                    placeholder=""
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="i-we-are" className="block text-sm font-medium text-gray-700">
                    I/We are
                  </label>
                  <select
                    id="i-we-are"
                    name="i-we-are"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  >
                    <option>Select</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message here"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full bg-[#1C3F5D] text-white py-3 px-6 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
            <p className="mt-4 text-xs text-center text-gray-500">
              By submitting this form, you are agreeing to Propellus{" "}
              <a href="#" className="text-[#1C3F5D] hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#1C3F5D] hover:underline">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestInPropellus;
