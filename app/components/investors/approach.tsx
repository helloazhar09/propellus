<<<<<<< HEAD
import React from "react";
// We will use standard <img> tags as next/image is not available in this environment.

const PropellusApproach = () => {
=======
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ApproachData } from "../../types/strapi";

const PropellusApproach = () => {
  const [approachData, setApproachData] = useState<ApproachData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApproachData = async () => {
      try {
        const response = await fetch("/api/investors-data");
        const data = await response.json();
        console.log("Approach data received:", data);

        // Check if we got an error response from the API
        if (data.error) {
          console.warn("Strapi connection failed for investors:", data.error);
          console.warn("Using fallback approach data");
          setApproachData({
            title: "Building Propellus with Our Customers, for Our Customers",
            subtitle: "OUR APPROACH",
            description:
              "With a revenue-sharing agreement with cornerstone client Prince Visa in the UK market and a strategic MOU with global OTAs Wego and GoZayaan, Propellus is collaborating with experts from the travel industry to ensure we address all customer pain points on our platform.",
          });
        } else if (data.approach) {
          console.log("Using Strapi approach data");
          setApproachData(data.approach);
        } else {
          console.warn("No approach data found in Strapi, using fallback");
          setApproachData({
            title: "Building Propellus with Our Customers, for Our Customers",
            subtitle: "OUR APPROACH",
            description:
              "With a revenue-sharing agreement with cornerstone client Prince Visa in the UK market and a strategic MOU with global OTAs Wego and GoZayaan, Propellus is collaborating with experts from the travel industry to ensure we address all customer pain points on our platform.",
          });
        }
      } catch (error) {
        console.error("Error fetching approach data:", error);
        setApproachData({
          title: "Building Propellus with Our Customers, for Our Customers",
          subtitle: "OUR APPROACH",
          description:
            "With a revenue-sharing agreement with cornerstone client Prince Visa in the UK market and a strategic MOU with global OTAs Wego and GoZayaan, Propellus is collaborating with experts from the travel industry to ensure we address all customer pain points on our platform.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchApproachData();
  }, []);

  if (loading) {
    return (
      <div
        className="relative py-2 px-1 overflow-hidden"
        style={{ backgroundColor: "#1C3F5D" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="text-white">Loading approach data...</div>
          </div>
        </div>
      </div>
    );
  }

>>>>>>> c15769c (strapi)
  return (
    <div
      className="relative py-2 px-1 overflow-hidden"
      style={{ backgroundColor: "#1C3F5D" }}
    >
      {/* Background Images */}
      <div className="absolute inset-0 pointer-events-none">
<<<<<<< HEAD
        <img
          src="/images/Vector03 (1).png"
          alt="Background decoration top"
          width={500}
          height={500}
          className="absolute -top-12 left-10 opacity-90 rotate-90"
        />
        <img
          src="/images/Vector03 (2).png"
          alt="Background decoration bottom"
          width={400}
          height={400}
          className="absolute -bottom-12 right-10 opacity-90 rotate-90"
=======
        <Image
          src="/top_glow.svg"
          alt="Background decoration top"
          width={500}
          height={500}
          className="absolute -top-12 left-0   rotate-180"
        />
        <Image
          src="/bottom_glow.svg"
          alt="Background decoration bottom"
          width={400}
          height={400}
          className="absolute -bottom-12 right-0  rotate-180"
>>>>>>> c15769c (strapi)
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 pt-12">
          <p className="text-white text-sm font-medium tracking-wider uppercase mb-2">
<<<<<<< HEAD
            OUR APPROACH
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 max-w-5xl mx-auto whitespace-nowrap">
            Building Propellus with Our Customers, for Our Customers
          </h2>
          <p className="text-white text-base lg:text-lg max-w-5xl mx-auto leading-relaxed">
            With a revenue-sharing agreement with cornerstone client Prince Visa in the UK
            market and a strategic MOU with global OTAs Wego and GoZayaan, Propellus is
            collaborating with experts from the travel industry to ensure we address all
            customer pain points on our platform.
=======
            {approachData?.subtitle || "OUR APPROACH"}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 max-w-5xl mx-auto whitespace-nowrap">
            {approachData?.title ||
              "Building Propellus with Our Customers, for Our Customers"}
          </h2>
          <p className="text-white text-base lg:text-lg max-w-5xl mx-auto leading-relaxed">
            {approachData?.description ||
              "With a revenue-sharing agreement with cornerstone client Prince Visa in the UK market and a strategic MOU with global OTAs Wego and GoZayaan, Propellus is collaborating with experts from the travel industry to ensure we address all customer pain points on our platform."}
>>>>>>> c15769c (strapi)
          </p>
        </div>

        {/* Images Section */}
        <div className="relative w-[1266px] h-[800px] mx-auto mt-2">
          {/* Left Image */}
          <div className="absolute top-[120px] left-0 w-[800px] h-[534px] rounded-[24px] overflow-hidden shadow-lg bg-white">
<<<<<<< HEAD
            <img
              src="/images/frame in1.png"
              alt="Prince Visa partnership"
              className="object-cover rounded-[24px]"
              style={{ width: "100%", height: "100%" }}
            />
            {/* Logos on top of the left image */}
            <div className="absolute inset-0 flex items-center justify-center -translate-y-52 space-x-18">
              <img
                src="/images/logo 2.png"
                alt="Propellus logo"
                className="h-12 w-auto"
              />
              <img
                src="/images/propellus logo 1.png"
                alt="Other logo"
=======
            <Image
              src={
                approachData?.main_image?.url
                  ? `${
                      process.env.NEXT_PUBLIC_STRAPI_URL ||
                      "http://127.0.0.1:1337"
                    }${approachData.main_image.url}`
                  : "/images/frame in1.png"
              }
              alt={
                approachData?.main_image?.alternativeText ||
                "Prince Visa partnership"
              }
              fill
              className="object-cover rounded-[24px]"
            />
            {/* Logos on top of the left image */}
            <div className="absolute inset-0 flex items-center justify-center -translate-y-52 space-x-18">
              <Image
                src={
                  approachData?.logo_1?.url
                    ? `${
                        process.env.NEXT_PUBLIC_STRAPI_URL ||
                        "http://127.0.0.1:1337"
                      }${approachData.logo_1.url}`
                    : "/images/logo 2.png"
                }
                alt={approachData?.logo_1?.alternativeText || "Propellus logo"}
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <Image
                src={
                  approachData?.logo_2?.url
                    ? `${
                        process.env.NEXT_PUBLIC_STRAPI_URL ||
                        "http://127.0.0.1:1337"
                      }${approachData.logo_2.url}`
                    : "/images/propellus logo 1.png"
                }
                alt={approachData?.logo_2?.alternativeText || "Other logo"}
                width={48}
                height={48}
>>>>>>> c15769c (strapi)
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Upper Right Image */}
          <div className="absolute top-[120px] left-[832px] w-[434px] h-[255px] rounded-[24px] overflow-hidden shadow-lg bg-white">
<<<<<<< HEAD
            <img
              src="/images/frame in2.png"
              alt="Wego partnership"
              className="object-cover rounded-[24px]"
              style={{ width: "100%", height: "100%" }}
=======
            <Image
              src={
                approachData?.secondary_image_1?.url
                  ? `${
                      process.env.NEXT_PUBLIC_STRAPI_URL ||
                      "http://127.0.0.1:1337"
                    }${approachData.secondary_image_1.url}`
                  : "/images/frame in2.png"
              }
              alt={
                approachData?.secondary_image_1?.alternativeText ||
                "Wego partnership"
              }
              fill
              className="object-cover rounded-[24px]"
>>>>>>> c15769c (strapi)
            />
          </div>

          {/* Lower Right Image */}
          <div className="absolute top-[399px] left-[832px] w-[434px] h-[255px] rounded-[24px] overflow-hidden shadow-lg bg-white">
<<<<<<< HEAD
            <img
              src="/images/frame in3.png"
              alt="Team collaboration"
              className="object-cover rounded-[24px]"
              style={{ width: "100%", height: "100%" }}
=======
            <Image
              src={
                approachData?.secondary_image_2?.url
                  ? `${
                      process.env.NEXT_PUBLIC_STRAPI_URL ||
                      "http://127.0.0.1:1337"
                    }${approachData.secondary_image_2.url}`
                  : "/images/frame in3.png"
              }
              alt={
                approachData?.secondary_image_2?.alternativeText ||
                "Team collaboration"
              }
              fill
              className="object-cover rounded-[24px]"
>>>>>>> c15769c (strapi)
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropellusApproach;
