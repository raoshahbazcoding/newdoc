import { Twitter, Instagram,Facebook , Contact, MapPin, Globe, Phone, ChevronRight } from "lucide-react";

const logo = "/hd-logo.svg";
// const fb = "/fb.png";

export default function Footer() {
  return (
    <footer className="bg-[#225555] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {/* Logo & Description */}
          <div>
            <a href="/" className="inline-block mb-6">
              <img src={logo} alt="City Dental Care" className="h-auto w-[180px] " />
            </a>
            <p className=" mb-6 leading-relaxed">
              At City Dental Clinic, our mission is to enhance your denture experience by providing excellent denture care.
            </p>
            <a href="#" className="flex font-semibold items-center text-sm uppercase  hover:underline">
              MORE ABOUT <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[25px] -font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About", "Services", "For Patients", "Contact"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center hover:underline transition">
                    <ChevronRight className="mr-2 h-4 w-4" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-[25px] font-semibold mb-6">Working Time</h3>
            <ul className="space-y-4 ">
              <li>Monday-Friday: 8AM-8PM</li>
              <li>Saturday: 9AM-6PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[25px] font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 ">
              {/* <li className="flex items-center space-x-2">
                <MapPin className="h-7 w-7   " />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
              </li> */}
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 " />
                <span>Address: 9 Earl Grey St <br /> Edinburgh EH3 9BN <br /> United Kingdom</span>
               
              </li>
              <li className="flex items-center space-x-2">
                <Contact className="h-5 w-5 " />
                <span>contact@citydentalclinic.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 " />
                <span>+02 9184 0851</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="h-5 w-5 " />
                <span>www.citydentalclinic.com</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[
                { icon: <Facebook  className="h-4 w-4" />, link: "#" },
                { icon: <Twitter className="h-4 w-4" />, link: "#" },
                { icon: <Instagram className="h-4 w-4" />, link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-[#316161] bg-opacity-70 hover:bg-opacity-100 transition"
                >
                  {typeof item.icon === "string" ? <img src={item.icon} alt="social" className="h-5 w-5" /> : item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#173C3C] py-4 text-center text-sm ">
        <div className="container mx-auto px-4">
          Copyright © 2025 Theme. All rights reserved. Powered by City Dental Clinic.
        </div>
      </div>
    </footer>
  );
}
