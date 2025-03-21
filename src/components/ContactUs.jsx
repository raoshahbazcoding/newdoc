const contact = "/contact.png";

export default function ContactUs() {
  return (
    <section className="py-1 mt-10 md:py-30">
      <div className="container mx-auto px-4 hidden md:block">
        <div className="bg-[#E8F4F4] flex flex-col md:flex-row items-center rounded-lg relative ">
          {/* Left Content */}
          <div className="p-10 md:p-16 md:w-1/2">
            <div className="uppercase text-[#1D5C5C] font-medium mb-4">
              CONTACT US
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Become The Next <br /> Our Happy Client
            </h2>
            <p className="text-gray-700 mb-8">
              If your dentures have broken, we endeavour to repair them ASAP,
              often on the same day.
            </p>
            <a
              href="/appointment"
              className="bg-[#1D5C5C] text-white px-6 py-3 inline-block uppercase  shadow-md hover:bg-[#174a4a] transition"
            >
              GET APPOINTMENT
            </a>
          </div>

          {/* Right Image - Doctor Overlapping Properly */}
          <div className="md:w-1/2  ">
            <img
              src={contact}
              alt="doctor"
              className="max-h-[400px] md:max-h-[600px] object-cover md:absolute md:bottom-0 md:right-0"
            />
          </div>
        </div>
      </div>

      {/* THis IS For mobile */}
      <div className="container mx-auto px-4 md:hidden mb-10">
        {/* Right Image - Doctor Overlapping Properly */}
        <div className="flex justify-center items-center" >
            <img
              src={contact}
              alt="doctor"
              className="max-h-[300px]   "
            />
          </div>
        <div className="bg-[#E8F4F4] flex flex-col justify-center items-center rounded-lg relative ">
          
          {/* Left Content */}
          <div className="p-10 ">
            <div className="uppercase text-[#1D5C5C] font-medium text-center mb-4">
              CONTACT US
            </div>
            <h2 className="text-4xl  font-light mb-6 leading-tight">
              Become The Next  Our Happy Client
            </h2>
            <p className="text-gray-700 mb-8">
              If your dentures have broken, we endeavour to repair them ASAP,
              often on the same day.
            </p>
            <a
              href="#"
              className="bg-[#1D5C5C] text-white px-6 py-3 inline-block uppercase  shadow-md hover:bg-[#174a4a] transition"
            >
              GET APPOINTMENT
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
}
