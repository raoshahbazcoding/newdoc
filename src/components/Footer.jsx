import { Facebook, Twitter, Instagram, ChevronRight } from "lucide-react"
import logo from '../assets/Footer/footer.png'
import fb from '../assets/Footer/fb.png'

export default function Footer() {
  return (
    <footer className="bg-[#225555] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <a href="/" className="inline-block mb-6">
              <img src={logo} alt="City Dental Care" className="h-auto w-[180px]" />
            </a>
            <p className="text-sm mb-6">
              At City Dental Clinic, our mission is to enhance your denture experience by providing excellent denture
              care
            </p>
            <a href="/about" className="flex items-center text-sm uppercase">
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
                <a href="/about" className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4" /> About
                </a>
              </li>
              <li>
                <a href="/services" className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4" /> Services
                </a>
              </li>
              <li>
                <a href="/patients" className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4" /> For Patients
                </a>
              </li>
              <li>
                <a href="/contact" className="flex items-center">
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
                <svg className="mr-2 h-5 w-5 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellus, luctus</span>
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 16.92V19.92C22 20.4704 21.7893 20.9978 21.4142 21.3728C21.0391 21.7479 20.5117 21.9586 19.96 21.96C18.4 22.07 16.88 21.94 15.43 21.57C14.0775 21.2218 12.7988 20.6615 11.64 19.91C10.5062 19.1718 9.47187 18.2899 8.56 17.29C7.80855 16.3782 7.24818 15.3995 6.9 14.36C6.53 12.91 6.4 11.39 6.51 9.82C6.51136 9.26827 6.72206 8.74086 7.09709 8.36583C7.47213 7.99079 7.99954 7.7801 8.55 7.78H11.55C12.0267 7.77557 12.4895 7.95023 12.8555 8.27175C13.2215 8.59328 13.4649 9.03799 13.54 9.51C13.66 10.38 13.87 11.23 14.17 12.04C14.3292 12.4461 14.3692 12.8939 14.2847 13.3241C14.2002 13.7542 13.9948 14.1492 13.69 14.46L12.69 15.46C13.5239 16.5478 14.5089 17.5328 15.5967 18.3667L16.5967 17.3667C16.9075 17.0619 17.3025 16.8565 17.7326 16.772C18.1628 16.6875 18.6106 16.7275 19.0167 16.8867C19.8267 17.1867 20.6767 17.3967 21.5467 17.5167C22.0292 17.5912 22.4743 17.8358 22.795 18.2031C23.1157 18.5703 23.2888 19.0342 23.2817 19.5117L22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>contact@citydentalclinic.com</span>
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>+02 9184 0851</span>
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7V12L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>www.citydentalclinic.com</span>
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

