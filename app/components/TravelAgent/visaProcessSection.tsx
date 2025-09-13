"use client";
import React from "react";
import Image from "next/image";

const VisaProcessingSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
            Automate, Scale, and Enhance visa processing
          </h2>
          <h3 className="text-2xl md:text-3xl font-normal text-gray-900 mb-8">
            with Propellus
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A fully automated online shopfront driving 2x growth in new customers to your website with dynamic SEO, beautifully 
            showcasing your services, displaying visa requirements, and enabling visa applications in just a few clicks!
          </p>
        </div>

        {/* Image Section with Blue Border */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Blue border container */}
            <div className="border-4 border-blue-400 rounded-lg p-2 bg-white shadow-lg">
              <Image 
                src="/images/TravelAgent-SF 1.png"
                alt="TravelAgents Dashboard Interface"
                width={1200}
                height={800}
                className="w-full max-w-4xl rounded-md"
              />
            </div>
            
            {/* Optional: Add a subtle shadow effect */}
            <div className="absolute -inset-2 bg-blue-100 rounded-lg -z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaProcessingSection;