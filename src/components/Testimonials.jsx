import { useState, useEffect } from "react";
import { Circle } from "lucide-react"; // Lucide icon for navigation

const cl1 = "/client_1.png";
const cl2 = "/client_2.jpg.png";

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    { id: 1, name: "Maryia Patupchyk", role: "Software Engineer", testimonial: "I had an outstanding experience with Dentist. His meticulous approach to prosthetic cosmetic dentistry truly sets him apart.", image: cl1 },
    { id: 2, name: "Venessa Cardillo", role: "Sr. UX/UI Designer", testimonial: "I had an outstanding experience with Dentist. His meticulous approach to prosthetic cosmetic dentistry truly sets him apart.", image: cl2 },
    { id: 3, name: "Latoya Brown", role: "Software Engineer", testimonial: "The entire team was friendly and made sure I was at ease throughout the treatment.", image: cl1 },
    { id: 4, name: "Emma Johnson", role: "Marketing Specialist", testimonial: "Highly recommended! The experience was smooth, and the team was very professional.", image: cl2 },
    { id: 5, name: "James Smith", role: "Project Manager", testimonial: "Very satisfied with the service! The attention to detail was impressive.", image: cl1 },
  ];

  // Auto-slide for mobile view
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-auto mb-16 mt-16 md:mt-10 md:mb-10 w-full max-w-7xl mx-auto px-4 py-16 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
        What Our Clients Say
      </h2>

      {/* Carousel - Display 3 Items at the Same Time */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {testimonials.slice(activeIndex, activeIndex + 3).map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative flex-1 bg-[#e0f2ed] rounded-lg p-6 pt-16 pb-10 transition-all duration-300 hover:shadow-2xl min-h-[250px]"
          >
            {/* Profile Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-md">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="mt-14 px-4 text-center">
              <p className="text-gray-800 mb-6 text-sm md:text-base leading-relaxed">
                {testimonial.testimonial}
              </p>
              <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
              <p className="text-gray-700 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots (Only Visible on Desktop) */}
      <div className="hidden md:flex justify-center gap-4 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 ${activeIndex === index ? "text-[#1d5c5c]" : "text-gray-400"}`}
          >
            <Circle size={12} />
          </button>
        ))}
      </div>
    </div>
  );
}
