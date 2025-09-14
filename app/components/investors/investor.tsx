import Image from 'next/image';

const PropellusInvestors = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
       <div className="mb-12 text-left w-[800px] ml-6"> 
  <p className="text-gray-600 text-sm font-medium uppercase tracking-wider mb-2">
    OUR INVESTORS
  </p>
  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
    $150,000 Raised in First Angel Round Backed by a Diverse Group of Investors
  </h2>
  <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
    Propellus has secured a strategic investment of $150,000 to accelerate our development. This diverse 
    group includes seasoned investors, successful founders, and domain experts who are passionate about and understand
    the problems we are solving.
  </p>
</div>


        {/* Investors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* First Row */}
          <div className="text-center">
            <div className="mb-2">
              <Image src="/images/Framee1.png" alt="Ridwan Hafiz" width={300} height={300} className="w-64 h-64 mx-auto object-cover shadow-md" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Ridwan Hafiz</h3>
            <p className="text-sm text-gray-600">Former CEO of Pathao, Ex-<br />MD at McKinsey & Company</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={18} height={18} />
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">LinkedIn Profile</a>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-2">
              <Image src="/images/Frame 2147225287 (1).png" alt="Audrey Yasan" width={300} height={300} className="w-64 h-64 mx-auto object-cover shadow-md" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Audrey Yasan</h3>
            <p className="text-sm text-gray-600">Founder of Audrey Capital and Majoo<br />Co-founder & Former CEO of HappyFresh</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={18} height={18} />
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">LinkedIn Profile</a>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-2">
              <Image src="/images/Frame 2147225287 (2).png" alt="Sultan Ali" width={300} height={300} className="w-64 h-64 mx-auto object-cover shadow-md" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Sultan Ali</h3>
            <p className="text-sm text-gray-600">Former Head of Strategy & Finance<br />at Pathao</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={18} height={18} />
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">LinkedIn Profile</a>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-2">
              <Image src="/images/Frame 2147225287 (3).png" alt="Vineet Kumar" width={300} height={300} className="w-64 h-64 mx-auto object-cover shadow-md" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Vineet Kumar</h3>
            <p className="text-sm text-gray-600">Ex-Senior Director at Uber, Strong<br />operations experience in South Asia</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={18} height={18} />
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">LinkedIn Profile</a>
            </div>
          </div>

          {/* Second Row */}
          <div className="text-center">
            <div className="mb-2">
              <Image src="/images/Frame 2147225287 (4).png" alt="Sankaran Sreeraman" width={300} height={300} className="w-64 h-64 mx-auto object-cover shadow-md" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Sankaran Sreeraman</h3>
            <p className="text-sm text-gray-600">Co-Founder of Artha Ventures, Former<br />SVP Engineering and Delivery at Flipkart</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={18} height={18} />
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">LinkedIn Profile</a>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-2">
              <Image src="/images/Frame 2147225287 (5).png" alt="Simran Sharan Ventures" width={300} height={300} className="w-64 h-64 mx-auto object-cover shadow-md" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Simran Sharan Ventures</h3>
            <p className="text-sm text-gray-600">Former Vice President, UberEats<br />CEO at Swiggy, SVP at Payal</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={18} height={18} />
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">LinkedIn Profile</a>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-2">
              <Image src="/images/Frame 2147225287 (6).png" alt="Hemant Bedi" width={300} height={300} className="w-64 h-64 mx-auto object-cover shadow-md" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Hemant Bedi</h3>
            <p className="text-sm text-gray-600">Trading Strategy, Head Quantitative<br />Research at Societe Generale Private Banking</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={18} height={18} />
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">LinkedIn Profile</a>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-2">
              <Image src="/images/Frame 2147225287 (7).png" alt="Saurav Bhatia" width={300} height={300} className="w-64 h-64 mx-auto object-cover shadow-md" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Saurav Bhatia</h3>
            <p className="text-sm text-gray-600">Angel Investor/Advisor, Advocate & Tech Lead for Start up Digital India</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={18} height={18} />
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">LinkedIn Profile</a>
            </div>
          </div>

          {/* Third Row */}
          <div className="text-center md:col-start-1">
            <div className="mb-2">
              <Image src="/images/Frame 2147225287 (8).png" alt="Cristian Panoui" width={300} height={300} className="w-64 h-64 mx-auto object-cover shadow-md" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Cristian Panoui</h3>
            <p className="text-sm text-gray-600">Creative Director at Freelance<br />Scaling CEO & Entrepreneur</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={18} height={18} />
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">LinkedIn Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropellusInvestors;
