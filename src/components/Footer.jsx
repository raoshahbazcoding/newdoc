import {  Twitter, Instagram,Contact ,MapPinCheck ,Globe , Phone ,ChevronRight } from "lucide-react"


const logo = "/footer.png";
const fb = "/fb.png";

export default function Footer() {
  return (
    <footer className="bg-[#225555] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <a href="/" className="inline-block mb-6">
              <img src={logo} alt="City Dental Care" className="h-auto w-[180px] hidden md:block" />
            </a>
            <p className="text-sm mb-6">
              At City Dental Clinic, our mission is to enhance your denture experience by providing excellent denture
              care
            </p>
            <a href="#" className="flex  font-semibold items-center text-sm uppercase text-[#A3DAEC]">
              MORE ABOUT <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div>
            <h3 className="text-xl mb-6">Quick Link</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4" /> Home
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4" /> About
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4" /> Services
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4" /> For Patients
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4" /> Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-6">Working Time</h3>
            <ul className="space-y-4">
              <li>Monday-Friday: 8AM-8PM</li>
              <li>Saturday: 9AM-6PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinCheck className="h-12 w-8"/>
                <span className="ml-2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellus, luctus</span>
              </li>
              <li className="flex items-center">
                <Contact className="h-6 w-5" />
                <span className="ml-2">contact@citydentalclinic.com</span>
              </li>
              <li className="flex items-center">
               <Phone className="h-6 w-5" />
                <span className="ml-2">+02 9184 0851</span>
              </li>
              <li className="flex items-center">
                
                 <Globe className="h-6 w-5" />
                <span className="ml-2">www.citydentalclinic.com</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a href="#" className="h-8 w-8 rounded-full bg-[#316161] bg-opacity-70 flex items-center justify-center">
                <img src={fb} alt="fb" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-[#316161] bg-opacity-20 flex items-center justify-center">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-[#316161] bg-opacity-20 flex items-center justify-center">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#173C3C] py-4 text-center text-sm">
        <div className="container mx-auto px-4">
          Copyright © 2025 Theme . All rights reserved. Powered By City Dental Clinic
        </div>
      </div>
    </footer>
  )
}

