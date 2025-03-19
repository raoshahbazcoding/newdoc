import React from "react";
import contact from "../assets/contact.png";

export default function ContactUs() {
  return (
    <section className="py-8 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-[#E8F4F4] flex flex-col md:flex-row items-center rounded-lg relative overflow-hidden">
          {/* Left Content */}
          <div className="p-10 md:p-16 md:w-1/2">
            <div className="uppercase text-[#1D5C5C] font-medium mb-4">
              CONTACT US
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Become The Next <br /> Our Happy Client
            </h2>
            <p className="text-gray-700 mb-8">
              If your dentures have broken, we endeavour to repair them ASAP,
              often on the same day.
            </p>
            <a
              href="/appointment"
              className="bg-[#1D5C5C] text-white px-6 py-3 inline-block uppercase rounded-md shadow-md hover:bg-[#174a4a] transition"
            >
              GET APPOINTMENT
            </a>
          </div>

          {/* Right Image - Doctor Overlapping Properly */}
          <img src={contact} alt="doctor" />
        </div>
      </div>
    </section>
  );
}
