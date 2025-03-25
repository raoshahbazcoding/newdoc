const about = "/doc-about-us.png";
import { PhoneCall,ShieldCheck ,Hospital ,HeartPulse   } from 'lucide-react';

export default function AboutUs() {
  const features = [
    {
      icon: <ShieldCheck className='h-8 w-8 text-[#3A6969] ' />,
      title: "Trusted Dental Experts in Edinburgh",
      description:
        "We have trained experts who use personnel and modern tools so that you and your family get the proper dental treatment you deserve in the city of Edinburgh.",
    },
    {
      icon: <Hospital className='text-[#3A6969] h-8 w-8' />,
      title: "Comprehensive and Affordable Dental Solutions",
      description:
        "We aim to offer dental treatments for all clients, which may include general checkups, cleanings, and complex cosmetic dentistry.",
    },
    {
      icon: < HeartPulse  className='h-8 w-8 text-[#3A6969] ' />,
      title: "Caring for the Personalised Smile of Each Patient",
      description:
        "From simple Invisalign treatments to an extreme smile makeover, the procedures that are followed depend on your requirements.",
    },
  ];

  return (
    <div>
      <section className="py-16 md:py-24 px-2 hidden md:block ">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <img src={about} alt="About Us" className="w-full h-auto" />
            </div>

            <div>
              <h2 className="uppercase text-[#1d5c5c]  mb-4  ">
                ABOUT US
              </h2>
              <h3 className="text-4xl md:text-5xl font-light mb-6">
              Ready to Transform Your Smile?
              </h3>
              <p className="text-gray-600 mb-8 w-[70%]">
              At City Dental Care in Edinburgh, we use the best services and technology in a friendly environment to enhance patient’s lives. We are a team of dentists with more than 20 years of experience and aim to ensure that every patient receives a comfortable dental experience, ranging from a simple examination to cosmetic surgery.

              </p>

              <div className="space-y-6 w-[70%]">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-[#e8f4f4] p-4 h-fit">{feature.icon}</div>
                    <div>
                      <h4 className="text-xl font-light mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="#"
                  className="bg-[#1d5c5c] text-white px-4 py-4 text-sm uppercase"
                >
                   Pain-Free Dentistry in Edinburgh – Book Now!
                </a>
                <a
                  href="#"
                  className="border border-[#225555] text-[#225555]  bg-[#E4F5F5] px-6 py-3 uppercase flex items-center hover:bg-[#339485] hover:text-white "
                >
                  {/* <img src={call} alt="call" className=" hover:text-whit"/> */}
                  <PhoneCall />
                  <span className=" font-semibold px-2 tex-xl  ">
                    
                  01312282442
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4  md:hidden ">
        <div className="container mx-auto px-2">
          <div className="  items-center">
            <div>
              <h2 className="uppercase text-[#1d5c5c] font-medium mb-4 text-center  ">
                ABOUT US
              </h2>
              <h3 className="text-3xl text-center   font-light mb-6">
              Ready to Transform Your Smile?
              </h3>
              <p className="text-gray-600 text-center mb-8 ">
              At City Dental Care in Edinburgh, we use the best services and technology in a friendly environment to enhance patient’s lives. We are a team of dentists with more than 20 years of experience and aim to ensure that every patient receives a comfortable dental experience, ranging from a simple examination to cosmetic surgery.
              </p>

              {/* about us feutures  */}
              <div className="space-y-6 -space-x-2 flex justify-center flex-wrap items-center  ">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 flex-col items-center "
                  >
                    <div className="bg-[#e8f4f4] p-4 h-fit ">
                      {feature.icon}
                    </div>

                    <div className="">
                      <h4 className="text-xl text-center  font-light mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* This IS Image */}
              <div className="relative ">
                <img src={about} alt="Doctor" className="w-full h-auto " />
              </div>
              {/* BUUTONS  */}
              <div className="flex  flex-col gap-4 m-8 ">
                <a
                  href="#"
                  className="bg-[#1d5c5c] text-sm text-white px-4 py-2 uppercase text-center"
                >
                 Pain-Free Dentistry in Edinburgh – Book Now! 
                </a>
                <a
                  href="#"
                  className="border  border-[#225555] text-[#225555]  bg-[#E4F5F5] px-4 py-3 uppercase flex items-center justify-center"
                >
                  {/* <img src={call} alt="call" /> */}
                  <PhoneCall />
                  <span className=" font-semibold px-2">

                  01312282442
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
