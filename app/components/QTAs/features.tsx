import React from 'react';
import { BookOpen, CheckCircle, Smartphone } from 'lucide-react'; // Example icons from lucide-react

const FeatureCard = ({ icon, title, description, bgColor }) => (
  <div className={`p-6 rounded-2xl ${bgColor} shadow-lg transition-transform transform hover:scale-105`}>
    <div className="p-3 bg-white rounded-full inline-block shadow-md">
      {icon}
    </div>
    <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600 text-sm">{description}</p>
  </div>
);

export default function PropellusFeatures() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20 text-center">
      <p className="text-gray-600 font-semibold text-sm tracking-wider mb-2">NEED A VISA TO TRAVEL?</p>
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
        Offer one-window travel & visa services<br className="hidden md:inline-block" /> within your platform
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Propellus is a travel-tech startup that helps users securely store travel data & auto-fill visa applications.
      </p>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard 
          icon={<BookOpen className="w-8 h-8 text-blue-500" />}
          title="Smart Data Locker"
          description="Stores your travel information, documents and history in one place."
          bgColor="bg-blue-50"
        />
        <FeatureCard
          icon={<CheckCircle className="w-8 h-8 text-yellow-500" />}
          title="Requirements & Checklist"
          description="Provides up to date travel requirements."
          bgColor="bg-yellow-50"
        />
        <FeatureCard
          icon={<Smartphone className="w-8 h-8 text-blue-500" />}
          title="Auto fill"
          description="Auto fill online and paper visa forms."
          bgColor="bg-blue-50"
        />
      </div>

      <p className="mt-12 text-gray-600 text-lg">
        Seamlessly integrate and offer automated visa processing services to your customers with Propellus APIs
      </p>

      <div className="mt-8">
        <button className="bg-[#1C3F5D] text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors">
          View Live Demo
        </button>
      </div>
    </section>
  );
}
