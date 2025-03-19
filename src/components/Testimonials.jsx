"use client"

import dot from '../assets/testimonial/tab.png'
import { useState } from "react"

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Maryia Patupchyk",
      role: "Software Engineer",
      testimonial:
        "I had an outstanding experience with Dentist His meticulous approach to prosthetic cosmetic dentistry truly sets him apart.",
      image: "src/assets/testimonial/client_1.png", // Replace with your actual image path
    },
    {
      id: 2,
      name: "Venessa Cardillo",
      role: "Sr. UX/UI Designer",
      testimonial:
        "I had an outstanding experience with Dentis His meticulous approach to prosthetic cosmetic dentistry truly sets him apart.",
      image: "src/assets/testimonial/client_2.jpg.png", // Replace with your actual image path
    },
    {
      id: 3,
      name: "Latoya Brown",
      role: "Software Engineer",
      testimonial: "The entire team was friendly and made sure I was at ease throughout the treatment.",
      image: "src/assets/testimonial/client_1.png", // Replace with your actual image path
    },
  ]

  const handleDotClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl  font-light text-center mb-12">What Our Clients Says</h2>

      {/* Desktop layout - horizontal cards */}
      <div className="hidden md:flex justify-between gap-6 mb-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="relative flex-1 bg-[#e0f2ed] rounded-lg p-6 pt-12 mt-12">
            <div className="absolute -top-10 left-6">
              <div className="w-30 h-30 rounded-full border-6 border-white overflow-hidden">
                <img
                  src={testimonial.image || "/placeholder.svg"}
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

      {/* Mobile layout - vertical cards */}
      <div className="md:hidden space-y-16 mt-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="relative flex flex-col bg-[#e0f2ed] rounded-lg p-6 pt-12 mt-12">
            <div className="absolute -top-10 left-6">
              <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-gray-800 mb-4">{testimonial.testimonial}</p>
            <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
            <p className="text-gray-700">{testimonial.role}</p>
          </div>
        ))}
      </div>

      {/* Navigation dots with profile images - visible on both mobile and desktop */}
      <div className='hidden md:block'>
      <div className="flex justify-center gap-4 mt-10 ">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`relative p-0.5 rounded-full ${
              activeIndex === index ? "" : ""
            }`}
            aria-label={`View testimonial from ${testimonial.name}`}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src={dot}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        ))}
      </div>
      </div>
    </div>
  )
}

