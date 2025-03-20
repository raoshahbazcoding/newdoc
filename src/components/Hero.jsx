import { Star } from "lucide-react";

const hero = "/bg-hero.png";
const profile1 = "/profile1.png";
const profile2 = "/profile4.png";
const profile3 = "/profile3.png";
const clock = "/clock-hero.png";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[700px] md:min-h-[920px] py-10 md:py-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-[position:60%] md:bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="absolute inset-0 bg-[#0C2F2FCC] opacity-95"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 py-20 md:py-32 text-left relative z-10 text-white md:text-left">
        <div className="max-w-4xl">
          {/* Title */}
          <h1 className="text-3xl font-newyork md:text-2xl lg:text-7xl font-light mb-6">
            We Provide <span className="text-[#40E0D0]">Dentist</span> Service
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-10 max-w-2xl font-Nova">
            We at Medicare are always fully focused on helping you to overcome
            any Dentist procedure, with great commitment and easy recovery.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-16">
            <a
              href="#"
              className="bg-[#225555] border border-[#225555] text-white px-8 py-4 text-center uppercase font-semibold"
            >
              GET APPOINTMENT
            </a>
            <a
              href="#"
              className="bg-transparent border-[2px] border-[#319684] text-white px-8 py-4 text-center uppercase font-semibold hover:bg-white hover:text-[#003B3B] transition"
            >
              VIEW OUR SERVICES
            </a>
          </div>

          {/* Reviews Section */}
          <div className="flex items-center gap-4">
            {/* Profiles For Reviews */}
            <div className="flex -space-x-5">
              <img
                src={profile1}
                alt="User"
                className="w-[60px] h-[60px] hidden md:block rounded-full border-0.5 border-white"
              />
              <img
                src={profile2}
                alt="User"
                className="w-[60px] h-[60px] hidden md:block rounded-full border-0.5 border-white"
              />
              <img
                src={profile3}
                alt="User"
                className="w-[60px] h-[60px] hidden md:block rounded-full border-0.5 border-white"
              />
            </div>
            <div>
              <div className="text-3xl mb-0.5 hidden md:block font-medium">
                Google
              </div>
              <div>
                Based on <span className="font-bold text-xl">200 reviews</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mr-2 text-lg font-semibold">4.8 out of 5</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Get Appointment Sidebar */}
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="bg-[#37FFDB] text-[#1d5c5c] font-bold py-5 px-8 rounded rotate-[-90deg] origin-right whitespace-nowrap">
          GET APPOINTMENT
        </div>
      </div>

      {/* Mobile Get Appointment Sidebar */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 md:hidden">
        <div className="bg-[#37FFDB] py-5 px-5 rounded rotate-[-90deg] origin-right whitespace-nowrap">
          <img src={clock} alt="clock" className="h-5" />
        </div>
      </div>
    </div>
  );
}
