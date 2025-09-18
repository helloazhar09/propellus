"use client";
import React from "react";
import Image from "next/image";
import { FileText, Database, Frown, Upload, Bot, Globe } from "lucide-react";

const ProblemSolutionSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Problem Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Problem Content */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  PROBLEM
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Old, manual, error-prone system
              </h2>
<<<<<<< HEAD
              
=======

>>>>>>> c15769c (strapi)
              <div className="space-y-6">
                {/* Document Collection */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
<<<<<<< HEAD
                    <h3 className="font-semibold text-gray-900 mb-1">Document Collection</h3>
                    <p className="text-gray-600">
                      Challenges in efficiently gathering required documents for each applicant
=======
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Document Collection
                    </h3>
                    <p className="text-gray-600">
                      Challenges in efficiently gathering required documents for
                      each applicant
>>>>>>> c15769c (strapi)
                    </p>
                  </div>
                </div>

                {/* Data Extraction */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
<<<<<<< HEAD
                    <h3 className="font-semibold text-gray-900 mb-1">Data Extraction and Validation</h3>
                    <p className="text-gray-600">
                      Manual data extraction and validation processes are time-consuming and prone to errors
=======
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Data Extraction and Validation
                    </h3>
                    <p className="text-gray-600">
                      Manual data extraction and validation processes are
                      time-consuming and prone to errors
>>>>>>> c15769c (strapi)
                    </p>
                  </div>
                </div>

                {/* Poor Customer Experience */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Frown className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
<<<<<<< HEAD
                    <h3 className="font-semibold text-gray-900 mb-1">Poor Customer Experience</h3>
                    <p className="text-gray-600">
                      Negative online experiences lead to decreased customer satisfaction
=======
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Poor Customer Experience
                    </h3>
                    <p className="text-gray-600">
                      Negative online experiences lead to decreased customer
                      satisfaction
>>>>>>> c15769c (strapi)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Image */}
<<<<<<< HEAD
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="shadow-2xl rounded-lg overflow-hidden">
                  <Image 
                    src="/images/middleimage1.png"
                    alt="Manual visa processing problems"
                    width={500}
                    height={300}
                    className="w-full max-w-md h-auto object-cover"
                  />
                </div>
              </div>
=======
            <div className="order-1 lg:order-2 flex justify-center ">
              <Image
                src="/images/middleimage1.png"
                alt="Manual visa processing problems"
                width={600}
                height={490}
                className="w-full !max-w-[600px] max-h-[490px] h-full object-cotnain"
              />
>>>>>>> c15769c (strapi)
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Solution Image */}
            <div className="order-1 flex justify-center">
<<<<<<< HEAD
              <div className="shadow-2xl rounded-lg overflow-hidden">
                <Image 
                  src="/images/middleimage2.png"
                  alt="Automated visa processing with AI"
                  width={500}
                  height={300}
                  className="w-full max-w-md h-auto object-cover"
                />
              </div>
=======
              <Image
                src="/images/middleimage2.png"
                alt="Automated visa processing with AI"
                width={600}
                height={490}
                className="w-full !max-w-[600px] rounded-[30px]  max-h-[490px] h-full object-cotnain"
              />
>>>>>>> c15769c (strapi)
            </div>

            {/* Solution Content */}
            <div className="order-2">
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  SOLUTION
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Automated visa processing with AI
              </h2>
<<<<<<< HEAD
              
=======

>>>>>>> c15769c (strapi)
              <div className="space-y-6">
                {/* Direct Customer Document Uploads */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Upload className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
<<<<<<< HEAD
                    <h3 className="font-semibold text-gray-900 mb-1">Direct customer document uploads</h3>
                    <p className="text-gray-600">
                      reducing manual processing.
                    </p>
=======
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Direct customer document uploads
                    </h3>
                    <p className="text-gray-600">reducing manual processing.</p>
>>>>>>> c15769c (strapi)
                  </div>
                </div>

                {/* Automated Visa Application */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
<<<<<<< HEAD
                    <h3 className="font-semibold text-gray-900 mb-1">Automated visa application with AI-powered OCR.</h3>
=======
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Automated visa application with AI-powered OCR.
                    </h3>
>>>>>>> c15769c (strapi)
                  </div>
                </div>

                {/* Online Shopfront */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
<<<<<<< HEAD
                    <h3 className="font-semibold text-gray-900 mb-1">Offer a Free Online Shopfront for a</h3>
=======
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Offer a Free Online Shopfront for a
                    </h3>
>>>>>>> c15769c (strapi)
                    <p className="text-gray-600">
                      Seamless Customer Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionSection;
