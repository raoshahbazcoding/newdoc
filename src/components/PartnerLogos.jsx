import { useEffect, useRef, useState } from "react";

const logo1 = "/plogo-1.png";
const logo2 = "/p-logo3.png";
const logo3 = "/plogo-1.png";
const bg = "/bg.png";

// Logos for Mobile
import logom1 from "../assets/logo-m.png";
import logom2 from "../assets/logo-m2.png";

export default function Partners() {
  const logos = [logo1, logo2, logo3, logo1, logo2, logo3]; // Duplicated for seamless loop
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!scrollRef.current) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust speed if needed
    const maxScroll = scrollRef.current.scrollWidth / 2; // Halfway point to reset

    const scroll = () => {
      if (!isHovered) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= maxScroll) {
          scrollRef.current.scrollLeft = 0;
          scrollAmount = 0;
        } else {
          scrollRef.current.scrollLeft = scrollAmount;
        }
      }
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, [isHovered]);

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#1D5C5C] opacity-91"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative container mx-auto py-16">
        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <div
            ref={scrollRef}
            className="flex items-center gap-16 whitespace-nowrap overflow-hidden w-full"
            onMouseEnter={() => setIsHovered(false)}
            onMouseLeave={() => setIsHovered(true)}
          >
            {/* Duplicate logos for seamless looping */}
            {logos.concat(logos).map((logo, index) => (
              <img key={index} src={logo} alt={`Partner ${index}`} className="h-10 md:h-18" />
            ))}
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden flex justify-center gap-5">
          <img src={logom1} alt="Pharmacy" className="h-15" />
          <img src={logom2} alt="Healthcare" className="h-15" />
        </div>
      </div>
    </div>
  );
}
