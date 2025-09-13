"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TravelBusinessSections = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-full mx-auto space-y-16">
        
        {/* Travel Agents Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Content Side */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                FOR TRAVEL AGENTS
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Grow your travel business with AI powered automation
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Boost customer satisfaction with automated visa applications
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Automated visa application with AI-powered OCR
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Online shop front for a seamless user experience
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Start for free
                </button>
                <Link 
                  href="/learn-more"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
              <Image
                src="/images/image1.png"
                alt="Travel Agent Dashboard Interface"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* OTAs Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row-reverse">
            {/* Content Side */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                FOR OTAS
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Offer one-window travel & visa services within your OTA platform
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Seamlessly integrate and offer automated visa processing services to your customers from beginning to the end
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Use for OTA partners is competitive speed
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    User service access with visa processing
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Complete automated workflow and instant document processing
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Register Interest
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
              <Image
                src="/images/image2.png"
                alt="OTA Platform Integration Interface"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBusinessSections;
