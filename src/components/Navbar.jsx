import { Clock, Phone, MapPin, Menu } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo3.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Contact Info Section */}
      <div className="w-full border-b border-gray-300">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-6">
          {/* Logo */}
          <a  href="/" className=" hidden md:block  items-center">
            <img src={logo} alt="City Dental Care" className="h-auto w-[120px]" />
          </a>

          {/* Contact Details */}
          <div className="flex flex-wrap md:flex-row gap-4 md:gap-6 mt-4 md:mt-0 text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="bg-[#1d5c5c] p-2 rounded">
                <Clock className="text-white h-5 w-5" />
              </div>
              <div>
                <p className="text-sm flex items-start text-gray-500">Opening Time</p>
                <p className="text-sm">Monday - Friday 8AM - 7PM</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#1d5c5c] p-2 rounded">
                <Phone className="text-white h-5 w-5" />
              </div>
              <div>
                <p className="text-sm flex items-start text-gray-500">Phone no</p>
                <p className="text-sm">+0800 2336 7811</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#1d5c5c] p-2 rounded">
                <MapPin className="text-white h-5 w-5" />
              </div>
              <div>
                <p className="text-sm flex items-start text-gray-500">Location</p>
                <p className="text-sm">New York, W2 3XE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="w-full  py-4">
        <div className="container mx-auto flex justify-between items-center  py-4 px-4 md:px-6">
          {/* Desktop Navigation */}
          <nav className="hidden  md:flex items-center space-x-8">
            {["Home", "About us", "Our Staff", "Blogs", "Feedback", "FAQ's", "Services", "Contact us"].map((item) => (
              <a key={item} href={`/${item.toLowerCase().replace(" ", "")}`} className="text-sm font-medium hover:text-[#1d5c5c]">
                {item}
              </a>
            ))}
          </nav>

          {/* Appointment Button */}
          <a href="/appointment" className="hidden md:block bg-[#1d5c5c] text-white px-6 py-3 text-sm font-medium uppercase">
            GET APPOINTMENT
          </a>

          {/* Mobile Menu Button */}
          <a   href="/" className=" ml-1 mr-1 md:hidden ">
            <img src={logo} alt="City Dental Care" className="h-auto w-[130px]" />
          </a>
          
          <button className=" ml-1 mr-1 md:hidden " onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-9 w-9 text-[#1d5c5c]" />
          </button>
          
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (

          <div className="hiden bg-white shadow-md text-center p-4 space-y-4">
            {["Home", "About us", "Our Staff", "Blogs", "Feedback", "FAQ's", "Services", "Contact us"].map((item) => (
              <a key={item} href={`/${item.toLowerCase().replace(" ", "")}`} className="block text-sm font-medium hover:text-[#1d5c5c]">
                {item}
              </a>
            ))}
            <a href="/appointment" className="block bg-[#1d5c5c] text-white px-6 py-3 text-sm font-medium uppercase text-center">
              GET APPOINTMENT
            </a>
          </div>
        )}
      </div>
    </>
  );
}
