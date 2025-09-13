"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#009BA2] to-[#5CE1E6] flex flex-col">
      {/* Blue Navigation Bar */}
      <div className="bg-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <h2 className="text-lg font-medium">Travel Agents</h2>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white hover:text-gray-200 font-medium">
                Pricing
              </a>
              <a href="#" className="text-white hover:text-gray-200 font-medium">
                View Live Demo
              </a>
              <button className="bg-white text-slate-700 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-tight mb-4">
            Visa Application Solution
          </h1>
          <h2 className="text-white text-[24px] md:text-[28px] lg:text-[32px] font-normal leading-tight">
            For Travel Agents in London
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200">
            Request a Call
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold py-3 px-8 rounded-md transition-colors duration-200">
            View Live Demo
          </button>
        </div>

        {/* Trusted By Section */}
        <div className="text-center">
          <h3 className="text-white text-sm font-medium mb-6 tracking-wide uppercase">
            Trusted by leading travel agencies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
            {/* Wego Logo */}
            <div className="flex items-center space-x-2 text-white">
              <span className="text-xl font-bold">wego</span>
            </div>

            {/* Cleartrip Logo */}
            <div className="text-white text-xl font-normal">
              cleartrip
            </div>

            {/* Thomas Cook Logo */}
            <div className="text-white text-xl font-normal">
              THOMAS COOK
            </div>

            {/* MakeMyTrip Logo */}
            <div className="text-white text-xl font-bold">
              MakeMyTrip
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;