import React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                <div
                  className="w-4 h-4 bg-white rounded-full transform rotate-45"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                ></div>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Propellus
              </span>
            </div>
          </div>

          {/* Navigation Links - Always visible */}
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Travellers
            </Link>
            <Link 
              href="/TravelAgents" 
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Travel Agents
            </Link>
            <Link 
              href="/QTAS" 
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              OTAs
            </Link>
          </div>

          {/* Right Side - Help, Login, Sign up */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <span>Help</span>
              <ChevronDown size={16} className="ml-1" />
            </button>
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium px-3 py-2">
              Login
            </Link>
            <Link href="/signup" className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 font-medium">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
