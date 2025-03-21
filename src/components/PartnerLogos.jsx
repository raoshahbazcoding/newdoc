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
  const mobileScrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileHovered, setIsMobileHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust speed if needed
    const maxScroll = scrollContainer.scrollWidth / 2;

    const scroll = () => {
      if (!isHovered) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= maxScroll) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        } else {
          scrollContainer.scrollLeft = scrollAmount;
        }
      }
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, [isHovered]);

  // Mobile scrolling effect
  useEffect(() => {
    const mobileContainer = mobileScrollRef.current;
    if (!mobileContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; 
    const maxScroll = mobileContainer.scrollWidth / 2;

    const scroll = () => {
      if (!isMobileHovered) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= maxScroll) {
          mobileContainer.scrollLeft = 0;
          scrollAmount = 0;
        } else {
          mobileContainer.scrollLeft = scrollAmount;
        }
      }
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, [isMobileHovered]);

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
            {logos.concat(logos).map((logo, index) => (
              <img key={index} src={logo} alt={`Partner ${index}`} className="h-10 md:h-18" />
            ))}
          </div>
        </div>

        {/* Mobile Scrolling Logos */}
        <div className="md:hidden overflow-hidden w-full">
          <div
            ref={mobileScrollRef}
            className="flex items-center gap-5 whitespace-nowrap overflow-hidden w-full"
            onMouseEnter={() => setIsMobileHovered(false)}
            onMouseLeave={() => setIsMobileHovered(true)}
          >
            {[logom1, logom2, logom1, logom2].map((logo, index) => (
              <img key={index} src={logo} alt={`Mobile Partner ${index}`} className="h-15" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
