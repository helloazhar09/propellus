"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Add your email subscription logic here
    try {
      // Example: await subscribeToNewsletter(email);
      console.log('Subscribing email:', email);
      
      // Reset form after successful submission
      setEmail('');
      alert('Successfully subscribed to our newsletter!');
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Solutions Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/for-travelers" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  For Travelers
                </Link>
              </li>
              <li>
                <Link 
                  href="/for-travel-agents" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  For Travel Agents
                </Link>
              </li>
              <li>
                <Link 
                  href="/for-otas" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  For OTAs
                </Link>
              </li>
              <li>
                <Link 
                  href="/for-brand-partners" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  For Brand Partners
                </Link>
              </li>
              <li>
                <Link 
                  href="/for-investors" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  For Investors
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/help-center" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  href="/documentation" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Propellus Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/demo" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  View Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">About</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link 
                  href="/esg" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  ESG
                </Link>
              </li>
              <li>
                <Link 
                  href="/kyc-kyb" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  KYC/KYB
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact here
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Subscribe to our emails</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-400 text-white font-medium rounded-md transition-colors duration-200 disabled:cursor-not-allowed"
              >
                {isSubscribing ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Brand */}
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                {/* Propellus Logo */}
                <div className="relative">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    className="text-cyan-500"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">Propellus</span>
              </div>
              <p className="text-gray-400 text-sm ml-4">
                Propellus helps travel agents and OTAs offer fully automated visa processing services to travelers.
              </p>
            </div>

            {/* Footer Links */}
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms
              </Link>
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link 
                href="/cookie-policy" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left mt-4">
            <p className="text-gray-400 text-sm">
              2024 Propellus
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;