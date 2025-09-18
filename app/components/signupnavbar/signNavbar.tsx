<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
=======
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
>>>>>>> c15769c (strapi)

const SignNavbar = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
<<<<<<< HEAD
          <div className="flex-shrink-0 flex items-center">
            <svg
              className="h-8 w-auto text-cyan-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
              <path
                d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM5.8 15.68l2.9-2.9c.78-.78 1.96-.78 2.74 0l1.8 1.8c.78.78 1.96.78 2.74 0l2.9-2.9C18.2 12.03 18.9 11 18.9 10s-.7-2.03-1.8-3.23l-2.9-2.9c-.78-.78-1.96-.78-2.74 0l-1.8 1.8c-.78.78-1.96.78-2.74 0l-2.9-2.9C5.8 10.03 5.1 11 5.1 12s.7 2.03 1.8 3.23z"
                fill="url(#grad1)"
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: 'rgb(0,255,255)', stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{
                      stopColor: 'rgb(50, 205, 179)',
                      stopOpacity: 1,
                    }}
                  />
                </linearGradient>
              </defs>
            </svg>
            <span className="ml-2 text-xl font-bold text-gray-900">
              Propellus
            </span>
          </div>
=======
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src={"logo.svg"}
              alt="Propellus Logo"
              width={120}
              height={50}
            />
          </Link>
>>>>>>> c15769c (strapi)

          {/* Nav links and buttons */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
            {/* Help Dropdown */}
            <div className="relative">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-900 focus:outline-none flex items-center"
                onClick={() => setIsHelpOpen(!isHelpOpen)}
              >
                Help
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>
              {isHelpOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <Link
                      href="/support"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Support
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Login Link */}
            <Link
              href="/login"
              className="text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Login
            </Link>

            {/* Sign Up Link (button style) */}
            <Link
              href="/signup"
              className="inline-flex items-center px-4 py-2 border border-blue-500 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SignNavbar;
