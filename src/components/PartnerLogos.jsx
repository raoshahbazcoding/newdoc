import React from "react";
import logo1 from "../assets/plogo-1.png"; // Update with correct path
import logo2 from "../assets/p-logo3.png"; // Update with correct path
import logo3 from "../assets/plogo-1.png"; // Update with correct path
import bg from "../assets/bg.png"; // Update with correct path

// logos For Mobile
import logom1 from '../assets/logo-m.png'
import logom2 from '../assets/logo-m2.png'

export default function ServicesSection() {
  return (
    <div>
      <div className="hidden md:block">
      <section
      className="  relative w-full flex items-center h-[30vh] justify-center  py-50 md:py-16"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1D5C5C] opacity-80"></div>

      {/* Content */}
     <div className="hidden md:block">
     <div className="  relative z-10 container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
        <div className="flex items-center gap-3">
          <img src={logo1} alt="Pharmacy" className="h-10 md:h-18" />
          
        </div>

        <div className="flex items-center gap-3">
          <img src={logo2} alt="Healthcare" className="h-10 md:h-18" />
         
        </div>

        <div className="flex items-center gap-3">
          <img src={logo3} alt="Clinic" className="h-10 md:h-18" />
    
        </div>
      </div>
     </div>
    
    </section>
      </div>


      {/* For Mobile */}
      <div className="md:hidden">
        <section
      className="relative w-full flex  h-[20vh]  items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1D5C5C] opacity-95"></div>

      {/* Content */}
     <div className="md:hidden">
     <div className="  relative z-10  mx-auto  flex  justify-center  gap-5 ">
        <div className="flex">
          <img src={logom1} alt="Pharmacy" className="h-15" />
          
        </div>

        <div className="flex">
          <img src={logom2} alt="Healthcare" className="h-15 " />
         
        </div>
      </div>
     </div>
    
    </section>
      </div>
    </div>
  );
}
