import { Clock, Phone, MapPin, Menu, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";

const logo = "/logo3.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = [
    "Home",
    "About us",
    "Our Staff",
    "Blogs",
    "Feedback",
    "FAQ's",
    "Services",
    "Contact us",
  ];

  const serviceItems = ["Dentist", "Therapist", "Neurologist"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false);
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* Contact Info Section */}
      <div className="w-full border-b border-gray-300">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-2  ">
          {/* Logo */}
          <a href="/" className="hidden md:block">
            <img src={logo} alt="City Dental Care" className="w-[100px] md:w-[120px] lg:w-[120px] h-auto" />
          </a>

          {/* Contact Details */}
          <div className="flex flex-wrap md:flex-row gap-4 md:gap-6 mt-4 md:mt-0 md:text-left">
            {[
              { icon: <Clock className="text-white h-5 w-5" />, label: "Opening Time", value: "Mon - Fri 8AM - 7PM" },
              { icon: <Phone className="text-white h-5 w-5" />, label: "Phone", value: "+0800 2336 7811" },
              { icon: <MapPin className="text-white h-5 w-5" />, label: "Location", value: "New York, W2 3XE", hidden: true },
            ].map((item, index) => (
              <div key={index} className={`flex items-center gap-2 ${item.hidden ? "hidden md:flex" : ""}`}>
                <div className="bg-[#1d5c5c] p-2 rounded">{item.icon}</div>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-xs md:text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="w-full py-2 sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
          {/* Logo (Visible on Mobile) */}
          <a href="/" className="md:hidden">
            <img src={logo} alt="City Dental Care" className="w-[80px] h-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            {menuItems.map((item) =>
              item === "Services" ? (
                <div key={item} className="relative dropdown">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`text-[15px] font-medium flex items-center gap-1 pb-1 border-b-2 ${
                      activeMenu === item ? "border-[#40E0D0]" : "border-transparent"
                    } hover:border-[#40E0D0]`}
                  >
                    {item}
                    <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                      {serviceItems.map((service) => (
                        <a
                          key={service}
                          href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:border-b-2 border-transparent hover:border-[#40E0D0]"
                          onClick={() => setActiveMenu(item)}
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className={`text-[15px] font-medium pb-1 border-b-2 ${
                    activeMenu === item ? "border-[#40E0D0]" : "border-transparent"
                  } hover:border-[#40E0D0]`}
                  onClick={() => setActiveMenu(item)}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Appointment Button (Desktop Only) */}
          <a href="#" className="hidden md:block bg-[#1d5c5c] text-white px-6 py-2 text-sm font-medium uppercase">
            GET APPOINTMENT
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-8 w-8 text-[#1d5c5c]" /> : <Menu className="h-8 w-8 text-[#1d5c5c]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute left-0 top-full w-full bg-white shadow-md text-center p-4 space-y-4 z-50">
            {menuItems.map((item) =>
              item === "Services" ? (
                <div key={item} className="relative">
                  <button
                    className="w-full text-sm font-medium flex justify-center items-center gap-1 hover:text-[#1d5c5c]"
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  >
                    {item} <ChevronDown className={`h-4 w-4 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="mt-2 bg-gray-100 shadow-md rounded-md">
                      {serviceItems.map((service) => (
                        <a
                          key={service}
                          href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="block text-sm font-medium hover:text-[#1d5c5c]"
                  onClick={() => setActiveMenu(item)}
                >
                  {item}
                </a>
              )
            )}
            <a href="#" className="block bg-[#1d5c5c] text-white px-6 py-3 text-sm font-medium uppercase text-center">
              GET APPOINTMENT
            </a>
          </div>
        )}
      </div>
    </>
  );
}
