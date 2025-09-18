"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer/Footer";

type TermsSection = {
  heading: string;
  detail: string;
};

type TermsData = {
  title: string;
  last_update_date: string;
  intro: string;
  sections: TermsSection[];
};

export default function TermsOfService() {
  const [termsData, setTermsData] = useState<TermsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTerms() {
      try {
        const res = await fetch("/api/terms", { cache: "no-store" });
        const data = await res.json();

        if (data.error) {
          console.error("Error fetching terms:", data.error);
          setError(data.error);
          setTermsData(null);
        } else {
          setTermsData(data);
          setError(null);
        }
      } catch (err) {
        console.error("Fetch failed:", err);
        setError("Failed to fetch Terms of Service");
      } finally {
        setLoading(false);
      }
    }

    fetchTerms();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!termsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No Terms of Service found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-800 mb-4">{termsData.title}</h1>
          <p className="font-semibold text-gray-600">
            Last updated: {termsData.last_update_date}
          </p>
        </div>

        {/* Intro */}
        {termsData.intro && <p className="text-gray-600 mb-8">{termsData.intro}</p>}

        {/* Sections */}
        {termsData.sections?.map((section, index) => (
          <div key={index} className="mb-8">
            {section.heading && (
              <h2 className="font-semibold text-gray-800 mb-2">{section.heading}</h2>
            )}
            {section.detail && <p className="text-gray-600">{section.detail}</p>}
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
