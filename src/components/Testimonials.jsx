import { useState, useEffect } from "react";
import { Circle } from "lucide-react"; // Lucide icon for navigation

// All Images
const cl1 = "/client_1.png";
const cl2 = "/client_2.jpg.png";

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maryia Patupchyk",
      role: "Software Engineer",
      testimonial:
        "I had an outstanding experience with Dentist. His meticulous approach to prosthetic cosmetic dentistry truly sets him apart.",
      image: cl1,
    },
    {
      id: 2,
      name: "Venessa Cardillo",
      role: "Sr. UX/UI Designer",
      testimonial:
        "I had an outstanding experience with Dentist. His meticulous approach to prosthetic cosmetic dentistry truly sets him apart.",
      image: cl2,
    },
    {
      id: 3,
      name: "Latoya Brown",
      role: "Software Engineer",
      testimonial:
        "The entire team was friendly and made sure I was at ease throughout the treatment.",
      image: cl1,
    },
  ];

  // Auto-slide for mobile view
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" h-[900px] mb-60 mt-60 md:mt-1 md:mb-1 w-full max-w-7xl mx-auto px-4 py-16 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
        What Our Clients Say
      </h2>

      {/* Carousel - Display 3 Items at the Same Time */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`relative flex-1 bg-[#e0f2ed] rounded-lg p-6 pt-12 mt-12 transition-all duration-100 hover:shadow-2xl ${
              activeIndex === index ? "opacity-100 scale-105" : "opacity-70 scale-95"
            }`}
          >
            <div className="absolute -top-10 left-1">
              <div className="w-25 h-25 rounded-full border-4 border-white overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-gray-800 mb-6 mt-10">{testimonial.testimonial}</p>
            <p className="text-xl font-medium text-gray-900">{testimonial.name}</p>
            <p className="text-gray-700">{testimonial.role}</p>
          </div>
        ))}
      </div>

      {/* Navigation Dots (Only Visible on Desktop) */}
      <div className="hidden md:flex justify-center gap-4 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 ${
              activeIndex === index ? "text-[#1d5c5c]" : "text-gray-400"
            }`}
          >
            <Circle size={12} />
          </button>
        ))}
      </div>
    </div>
  );
}
