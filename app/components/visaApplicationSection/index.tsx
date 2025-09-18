"use client";

<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
=======
import React from "react";
import Image from "next/image";
import Link from "next/link";
>>>>>>> c15769c (strapi)

const VisaApplicationPage = () => {
  const steps = [
    {
<<<<<<< HEAD
      icon: "📄",
      title: "Upload Documents",
      description: "Securely upload all required documents"
    },
    {
      icon: "📋",
      title: "Review Application",
      description: "Review and verify your application details"
    },
    {
      icon: "💳",
      title: "Checkout and Pay",
      description: "Complete payment and submit your application"
    }
=======
      icon: "/upload.svg",
      title: "Upload Documents",
      description: "Securely upload all required documents",
    },
    {
      icon: "/application.svg",
      title: "Review Application",
      description: "Review and verify your application details",
    },
    {
      icon: "/checkout.svg",
      title: "Checkout and Pay",
      description: "Complete payment and submit your application",
    },
>>>>>>> c15769c (strapi)
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-full mx-auto">
        {/* Header Section */}
<<<<<<< HEAD
        <div className="text-center mb-16">
=======
        <div className="text-center ">
>>>>>>> c15769c (strapi)
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
            FOR TRAVELERS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Apply for visa in just a few clicks
          </h1>
<<<<<<< HEAD
          
          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 bg-blue-50 border-2 border-blue-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
=======

          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 ">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flexs items-center space-x-2 text-center max-w-xs"
              >
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={52}
                  height={52}
                  className="w-[52px] h-[52px]"
                />
                <h3 className="text-lg font-normal text-[#6A6A6A] ">
                  {step.title}
                </h3>
>>>>>>> c15769c (strapi)
              </div>
            ))}
          </div>
        </div>

        {/* Main Application Interface */}
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg border-4 border-cyan-200 overflow-hidden">
            <div className="p-8">
              <div className="relative w-full" style={{height: '400px'}}>
                <Image
                  src="/images/visa-application-demo.png"
                  alt="Dubai Single Tourist Visa Application Interface"
                  fill
                  className="object-contain rounded-lg"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
=======
        <Image
          src="/img-1.svg"
          alt="Dubai Single Tourist Visa Application Interface"
          className="object-contain w-full h-full  rounded-lg"
          width={100}
          height={100}
        />
>>>>>>> c15769c (strapi)

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-10 rounded-lg transition-colors duration-200 text-lg">
              Get Started
            </button>
<<<<<<< HEAD
            <Link 
              href="/learn-more"
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-4 px-10 rounded-lg transition-colors duration-200 inline-flex items-center justify-center text-lg"
=======
            <Link
              href="/learn-more"
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-900 font-semibold py-4 px-10 rounded-lg transition-colors duration-200 inline-flex items-center justify-center text-lg"
>>>>>>> c15769c (strapi)
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaApplicationPage;
