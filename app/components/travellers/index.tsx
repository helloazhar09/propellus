"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      author: "Ranjan Kumar",
      location: "India",
      bgColor: "bg-cyan-50"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      author: "Thabo Mlambo",
      location: "South Africa",
      bgColor: "bg-green-50"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      author: "Mohammed al Imran Hafeez",
      location: "Pakistan",
      bgColor: "bg-purple-50"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      author: "Sarah Johnson",
      location: "United States",
      bgColor: "bg-blue-50"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      author: "Ahmed Hassan",
      location: "Egypt",
      bgColor: "bg-orange-50"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === testimonials.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? testimonials.length - 3 : prev - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="bg-white py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Travellers Love Propellus
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors duration-200 group"
              aria-label="Previous testimonials"
            >
              <ChevronLeft 
                size={20} 
                className="text-gray-600 group-hover:text-gray-800" 
              />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors duration-200 group"
              aria-label="Next testimonials"
            >
              <ChevronRight 
                size={20} 
                className="text-gray-600 group-hover:text-gray-800" 
              />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${currentSlide}-${index}`}
              className={`${testimonial.bgColor} rounded-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-md`}
            >
              {/* Quote */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center space-x-3">
                  {/* Avatar Placeholder */}
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  {/* Name and Location */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600 text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: testimonials.length - 2 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                currentSlide === index 
                  ? 'bg-teal-500' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;