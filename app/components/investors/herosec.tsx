import Image from 'next/image';
import { Poppins } from 'next/font/google';

// ✅ Import Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // pick weights you need
});

const PropellusProblem = () => {
  return (
    <div className="bg-white py-16 px-8 lg:px-12" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Solving the{' '}
              <span className="text-gray-900">$7.2 Billion</span>{' '}
              Problem
            </h2>

            {/* ✅ Apply Poppins font here */}
            <div className={`${poppins.className} text-gray-800 text-base lg:text-lg`}>
              <p>
                Each year, 300 million people require a visa to travel.<br />
                We call them weak passport holders.<br />
                While most travel-tech companies are focused on<br />
                hotels and tickets, Propellus is building an ecosystem<br />
                where travellers, travel agents, OTAs, embassies, and<br />
                the travel industry can integrate and serve travellers<br />
                from emerging markets like India, China, South East Asia,<br />
                Africa, and South America.<br />
                That's a 7.2 billion dollar opportunity!
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/invertor1.png"
                alt="Global travel and visa solution illustration"
                width={500}
                height={400}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropellusProblem;
