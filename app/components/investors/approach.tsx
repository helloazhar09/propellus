import React from "react";
// We will use standard <img> tags as next/image is not available in this environment.

const PropellusApproach = () => {
  return (
    <div
      className="relative py-2 px-1 overflow-hidden"
      style={{ backgroundColor: "#1C3F5D" }}
    >
      {/* Background Images */}
      <div className="absolute inset-0 pointer-events-none">
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
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 pt-12">
          <p className="text-white text-sm font-medium tracking-wider uppercase mb-2">
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
          </p>
        </div>

        {/* Images Section */}
        <div className="relative w-[1266px] h-[800px] mx-auto mt-2">
          {/* Left Image */}
          <div className="absolute top-[120px] left-0 w-[800px] h-[534px] rounded-[24px] overflow-hidden shadow-lg bg-white">
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
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Upper Right Image */}
          <div className="absolute top-[120px] left-[832px] w-[434px] h-[255px] rounded-[24px] overflow-hidden shadow-lg bg-white">
            <img
              src="/images/frame in2.png"
              alt="Wego partnership"
              className="object-cover rounded-[24px]"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Lower Right Image */}
          <div className="absolute top-[399px] left-[832px] w-[434px] h-[255px] rounded-[24px] overflow-hidden shadow-lg bg-white">
            <img
              src="/images/frame in3.png"
              alt="Team collaboration"
              className="object-cover rounded-[24px]"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropellusApproach;
