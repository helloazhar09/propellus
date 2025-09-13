"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Define types for dropdown state
type DropdownType = "destination" | "residency" | "nationality";
interface DropdownState {
  isOpen: boolean;
  selected: string;
}

// Define interface for CustomDropdown props
interface CustomDropdownProps {
  label: string;
  type: DropdownType;
  options: string[];
  value: string;
}

const HeroSection = () => {
  // State with explicit type
  const [dropdowns, setDropdowns] = useState<
    Record<DropdownType, DropdownState>
  >({
    destination: { isOpen: false, selected: "Please Select" },
    residency: { isOpen: false, selected: "United Kingdom" },
    nationality: { isOpen: false, selected: "Indian" },
  });

  const destinationOptions = [
    "Please Select",
    "United Arab Emirates",
    "Saudi Arabia",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Oman",
  ];

  const residencyOptions = [
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Netherlands",
    "Switzerland",
    "Singapore",
    "Japan",
  ];

  const nationalityOptions = [
    "Indian",
    "Pakistani",
    "Bangladeshi",
    "Sri Lankan",
    "British",
    "American",
    "Canadian",
    "Australian",
    "German",
    "French",
  ];

  // Toggle dropdown with typed parameter
  const toggleDropdown = (type: DropdownType) => {
    setDropdowns((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        isOpen: !prev[type].isOpen,
      },
    }));
  };

  // Select option with typed parameters
  const selectOption = (type: DropdownType, value: string) => {
    setDropdowns((prev) => ({
      ...prev,
      [type]: {
        selected: value,
        isOpen: false,
      },
    }));
  };

  // CustomDropdown component with typed props
  const CustomDropdown: React.FC<CustomDropdownProps> = ({
    label,
    type,
    options,
    value,
  }) => (
    <div className="space-y-2 relative">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <button
          onClick={() => toggleDropdown(type)}
          className={`w-full p-3 border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
            value === "Please Select" ? "text-gray-500" : "text-gray-700"
          }`}
        >
          {value}
        </button>
        <ChevronDown
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-transform duration-200 ${
            dropdowns[type].isOpen ? "rotate-180" : ""
          }`}
          size={20}
        />

        {dropdowns[type].isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-600 rounded-md shadow-xl z-50 max-h-60 overflow-y-auto">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectOption(type, option)}
                className={`w-full px-4 py-3 text-left hover:bg-teal-600 transition-colors duration-150 ${
                  option === value
                    ? "bg-teal-600 text-white"
                    : "text-gray-100 hover:text-white"
                } ${index === 0 ? "rounded-t-md" : ""} ${
                  index === options.length - 1 ? "rounded-b-md" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-[#009BA2] to-[#5CE1E6]  flex flex-col">
      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-white text-[28px] md:text-[30px] lg:text-[40px] font-normal leading-tight">
            <span className="font-bold"> UAE Visa</span> application for{" "}
            <span className="font-bold">Indian National</span> from{" "}
            <span className="font-bold">UK</span>
          </h1>
        </div>

        {/* Search Form */}
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            {/* Use CustomDropdown for each dropdown */}
            <CustomDropdown
              label="Destination"
              type="destination"
              options={destinationOptions}
              value={dropdowns.destination.selected}
            />
            <CustomDropdown
              label="Residency"
              type="residency"
              options={residencyOptions}
              value={dropdowns.residency.selected}
            />
            <CustomDropdown
              label="Nationality"
              type="nationality"
              options={nationalityOptions}
              value={dropdowns.nationality.selected}
            />
          </div>

          {/* Search Button */}
          <div className="mt-6 flex justify-end">
            <button className="bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200">
              Search
            </button>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="text-center">
          <h2 className="text-white text-lg font-semibold mb-8 tracking-wide">
            TRUSTED BY LEADING TRAVEL AGENCIES
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Wego Logo */}
            <div className="flex items-center space-x-2 text-white">
              <span className="text-2xl font-bold">wego</span>
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">SG</span>
              </div>
            </div>

            {/* PrinceVisa Logo */}
            <div className="text-white text-2xl font-semibold italic">
              PrinceVisa
            </div>

            {/* Gazayaan Logo */}
            <div className="flex items-center text-white">
              <span className="text-2xl font-semibold mr-2">gazayaan</span>
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
              </div>
            </div>

            {/* AEG Logo */}
            <div className="border-2 border-white text-white px-3 py-1 text-lg font-bold">
              AEG
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
