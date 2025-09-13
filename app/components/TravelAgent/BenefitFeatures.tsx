"use client";
import React from "react";
import { ShieldCheck, Workflow, Zap, Users, Database, Lock, Layers, Clock, Scale, CreditCard, Scan } from "lucide-react";

const BenefitsFeatures = () => {
  const benefits = [
    {
      icon: <Workflow className="w-6 h-6 text-cyan-600" />,
      title: "Efficient Workload Management",
      description:
        "Reduces the workload on both agents and customers, ensuring that issues are resolved faster with minimal human intervention.",
      color: "bg-cyan-50 border-cyan-200",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Transparency and Trust",
      description:
        "Enhance transparency and trust, reducing confusion and delays due to manual follow-ups.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      title: "Streamlined Application Process",
      description:
        "Minimizes customer mistakes and agent rework, speeding up the application process.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ];

  const features = [
    { icon: <Users />, title: "Branded online shop front", description: "A self-managed online shop allows customers to view visa requirements and seamlessly apply for visas through an intuitive platform." },
    { icon: <Database />, title: "AI Powered Data Extraction / OCR", description: "Easily gather visa documents by using AI-driven OCR for precise data extraction and cross-validate information across multiple documents." },
    { icon: <Lock />, title: "Smart Data Locker", description: "Manage all travel documents in one place, reuse them for future visa applications, and maintain your visa and travel history efficiently." },
    { icon: <Layers />, title: "Unified Ecosystem", description: "Keep travelers, travel agencies, and visa suppliers connected on one platform, streamlining the visa process for fast, efficient approval in just a few clicks." },
    { icon: <Clock />, title: "Visa History", description: "Keep travelers, travel agencies, and visa suppliers connected on one platform, streamlining the visa process with just a few clicks." },
    { icon: <Scale />, title: "GDPR Compliance", description: "Keep travelers, travel agencies, and visa suppliers connected on one platform, streamlining the visa process with just a few clicks." },
    { icon: <CreditCard />, title: "Multiple Payment Gateway", description: "Keep travelers, travel agencies, and visa suppliers connected on one platform, streamlining the visa process with just a few clicks." },
    { icon: <Scan />, title: "AI Scanner", description: "Keep travelers, travel agencies, and visa suppliers connected on one platform, streamlining the visa process with just a few clicks." },
  ];

  return (
    <div className="bg-white py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Benefits */}
        <div className="mb-20">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
            Benefits
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Key Benefits for Travel Agents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`rounded-xl border p-6 flex flex-col space-y-3 ${benefit.color}`}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4 text-center">
            Features
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            A feature-rich visa platform
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 hover:shadow-md transition"
              >
                <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsFeatures;
