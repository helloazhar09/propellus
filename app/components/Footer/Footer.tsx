"use client";

<<<<<<< HEAD
import React, { useState, FormEvent } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');
=======
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
>>>>>>> c15769c (strapi)
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubscribing(true);
<<<<<<< HEAD
    
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
=======

    // Add your email subscription logic here
    try {
      // Example: await subscribeToNewsletter(email);
      console.log("Subscribing email:", email);

      // Reset form after successful submission
      setEmail("");
      alert("Successfully subscribed to our newsletter!");
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Failed to subscribe. Please try again.");
>>>>>>> c15769c (strapi)
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
=======
    <footer className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section with Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
>>>>>>> c15769c (strapi)
          {/* Solutions Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Solutions</h3>
            <ul className="space-y-3">
<<<<<<< HEAD
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
=======
              <li className="flex items-center">
                <span className="text-white mr-2">›</span>
                <Link
                  href="/for-travelers"
                  className="text-white hover:text-white transition-colors duration-200"
                >
                  For Travellers
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">›</span>
                <Link
                  href="/for-travel-agents"
                  className="text-white hover:text-white transition-colors duration-200"
>>>>>>> c15769c (strapi)
                >
                  For Travel Agents
                </Link>
              </li>
<<<<<<< HEAD
              <li>
                <Link 
                  href="/for-otas" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
=======
              <li className="flex items-center">
                <span className="text-white mr-2">›</span>
                <Link
                  href="/for-otas"
                  className="text-white hover:text-white transition-colors duration-200"
>>>>>>> c15769c (strapi)
                >
                  For OTAs
                </Link>
              </li>
<<<<<<< HEAD
              <li>
                <Link 
                  href="/for-brand-partners" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
=======
              <li className="flex items-center">
                <span className="text-white mr-2">›</span>
                <Link
                  href="/for-brand-partners"
                  className="text-white hover:text-white transition-colors duration-200"
>>>>>>> c15769c (strapi)
                >
                  For Brand Partners
                </Link>
              </li>
<<<<<<< HEAD
              <li>
                <Link 
                  href="/for-investors" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
=======
              <li className="flex items-center">
                <span className="text-white mr-2">›</span>
                <Link
                  href="/for-investors"
                  className="text-white hover:text-white transition-colors duration-200"
>>>>>>> c15769c (strapi)
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
<<<<<<< HEAD
              <li>
                <Link 
                  href="/help-center" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
=======
              <li className="flex items-center">
                <span className="text-white mr-2">›</span>
                <Link
                  href="/help-center"
                  className="text-white hover:text-white transition-colors duration-200"
>>>>>>> c15769c (strapi)
                >
                  Help Center
                </Link>
              </li>
<<<<<<< HEAD
              <li>
                <Link 
                  href="/documentation" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
=======
              <li className="flex items-center">
                <span className="text-white mr-2">›</span>
                <Link
                  href="/documentation"
                  className="text-white hover:text-white transition-colors duration-200"
>>>>>>> c15769c (strapi)
                >
                  Documentation
                </Link>
              </li>
<<<<<<< HEAD
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
=======
              <li className="flex items-center">
                <span className="text-white mr-2">›</span>
                <Link
                  href="/blog"
                  className="text-white hover:text-white transition-colors duration-200"
>>>>>>> c15769c (strapi)
                >
                  Propellus Blog
                </Link>
              </li>
<<<<<<< HEAD
              <li>
                <Link 
                  href="/demo" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
=======
              <li className="flex items-center">
                <span className="text-white mr-2">›</span>
                <Link
                  href="/demo"
                  className="text-white hover:text-white transition-colors duration-200"
>>>>>>> c15769c (strapi)
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
<<<<<<< HEAD
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
=======
              <li className="flex items-center">
                <span className="text-white mr-2">›</span>
                <Link
                  href="/about"
                  className="text-white hover:text-white transition-colors duration-200"
>>>>>>> c15769c (strapi)
                >
                  About us
                </Link>
              </li>
<<<<<<< HEAD
              <li>
                <Link 
                  href="/esg" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
=======
              <li className="flex items-center">
                <span className="text-white mr-2">›</span>
                <Link
                  href="/esg"
                  className="text-white hover:text-white transition-colors duration-200"
>>>>>>> c15769c (strapi)
                >
                  ESG
                </Link>
              </li>
<<<<<<< HEAD
              <li>
                <Link 
                  href="/kyc-kyb" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
=======
              <li className="flex items-center">
                <span className="text-white mr-2">›</span>
                <Link
                  href="/kyc-kyb"
                  className="text-white hover:text-white transition-colors duration-200"
>>>>>>> c15769c (strapi)
                >
                  KYC/KYB
                </Link>
              </li>
<<<<<<< HEAD
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
=======
              <li className="flex items-center">
                <span className="text-white mr-2">›</span>
                <Link
                  href="/contact"
                  className="text-white hover:text-white transition-colors duration-200"
>>>>>>> c15769c (strapi)
                >
                  Contact here
                </Link>
              </li>
            </ul>
          </div>
<<<<<<< HEAD

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Subscribe to our emails</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
=======
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left: Logo, Description, and Social Icons */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 flex-1">
            {/* Logo and Name */}
            <div className="flex flex-col  space-y-3">
              <div className="flex items-center ">
                <Image
                  src={"/logo_footer.svg"}
                  height={40}
                  width={128}
                  alt="logo"
                />
              </div>
              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <Link
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  <Image
                    src={"/facebook.svg"}
                    height={20}
                    width={20}
                    alt="logo"
                  />
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  <Image src={"/insta.svg"} height={20} width={20} alt="logo" />
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  <Image src={"/x.svg"} height={20} width={20} alt="logo" />
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  <Image
                    src={"/titktok.svg"}
                    height={20}
                    width={20}
                    alt="logo"
                  />
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  <Image
                    src={"/linkedin.svg"}
                    height={20}
                    width={20}
                    alt="logo"
                  />
                </Link>
              </div>
            </div>

            {/* Description */}
            <div className="flex-1">
              <p className="text-white text-sm max-w-md">
                Propellus helps travel agents and OTAs offer fully automated
                visa-processing services to travelers.
              </p>
            </div>
          </div>

          {/* Right: Newsletter Signup */}
          <div className="w-full lg:w-auto">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Subscribe to our emails
            </h3>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2"
            >
>>>>>>> c15769c (strapi)
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
<<<<<<< HEAD
                placeholder="Enter your email"
                required
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
=======
                placeholder="Email"
                required
                className="flex-1 px-4 py-2 bg-white border border-white rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent min-w-[250px]"
>>>>>>> c15769c (strapi)
              />
              <button
                type="submit"
                disabled={isSubscribing}
<<<<<<< HEAD
                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-400 text-white font-medium rounded-md transition-colors duration-200 disabled:cursor-not-allowed"
              >
                {isSubscribing ? 'Submitting...' : 'Submit'}
=======
                className="px-6 py-2 bg-[#00C2CB] disabled:bg-[#00C2CB] text-white font-medium rounded-md transition-colors duration-200 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubscribing ? "Submitting..." : "Submit"}
>>>>>>> c15769c (strapi)
              </button>
            </form>
          </div>
        </div>

<<<<<<< HEAD
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
=======
        {/* Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-4">
          <p className="text-white text-sm mb-4 md:mb-0">© 2024, Propellus.</p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/terms"
              className="text-white hover:text-white transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-white hover:text-white transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-white hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </Link>
>>>>>>> c15769c (strapi)
          </div>
        </div>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> c15769c (strapi)
