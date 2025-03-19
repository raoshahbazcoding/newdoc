import arrow from "../assets/WhyCooseUS/arrow.png";
import bg1 from "../assets/WhyCooseUS/bg1.png";
import img from "../assets/WhyCooseUS/image.png";

function WhyChooseUs() {
  return (
    <div className="relative bg-white h-[80vh] flex">
      {/* Left Section with Background Image */}
      <div
        className="relative w-1/2 flex items-center justify-center px-16"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full max-w-[600px]">
          {/* Content */}
          <p className="text-[#1A3D3C] text-sm font-semibold tracking-wider uppercase">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-serif font-semibold text-[#1A3D3C] mt-3 leading-[1.3]">
            Trusted Hands, Trusted Care: The Doctors Who Put You First
          </h2>
          <p className="text-[#717D7E] mt-6 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          {/* Button */}
          <button className="mt-6 flex items-center border border-[#1A3D3C] px-6 py-3 text-[#1A3D3C] text-md font-semibold uppercase tracking-wide hover:bg-[#1A3D3C] hover:text-white transition">
            Discover more
            <img src={arrow} alt="arrow" className="ml-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-1/2 flex items-center justify-center bg-white">
        {/* Background Image for Layering Effect */}
        <img
          src={img}
          alt="Medical Team"
          className="absolute w-[90%] h-[90%] object-cover opacity-30"
        />
      </div>

      {/* Overlapping Card Section (Now Properly Positioned) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-white shadow-lg p-10 grid grid-cols-2 gap-10 w-[50%] z-10">
        {/* Feature 1 */}
        <div className="text-center">
          <div className="bg-[#E9EFF0] p-4 rounded-lg inline-block mb-3">
            <img src="/icons/icon1.png" alt="Integrated Personalization" />
          </div>
          <h3 className="font-semibold text-lg text-[#1A3D3C]">
            Integrated Personalization
          </h3>
          <p className="text-[#717D7E] text-sm mt-2">
            Finibus ornare senectus enim nisi ultrices malesuada sem cursus at.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center">
          <div className="bg-[#E9EFF0] p-4 rounded-lg inline-block mb-3">
            <img src="/icons/icon2.png" alt="Medical Innovation" />
          </div>
          <h3 className="font-semibold text-lg text-[#1A3D3C]">
            Medical Innovation
          </h3>
          <p className="text-[#717D7E] text-sm mt-2">
            Finibus ornare senectus enim nisi ultrices malesuada sem cursus at.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center">
          <div className="bg-[#E9EFF0] p-4 rounded-lg inline-block mb-3">
            <img src="/icons/icon3.png" alt="Comprehensive Attention" />
          </div>
          <h3 className="font-semibold text-lg text-[#1A3D3C]">
            Comprehensive Attention
          </h3>
          <p className="text-[#717D7E] text-sm mt-2">
            Finibus ornare senectus enim nisi ultrices malesuada sem cursus at.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="text-center">
          <div className="bg-[#E9EFF0] p-4 rounded-lg inline-block mb-3">
            <img src="/icons/icon4.png" alt="Health Transformation" />
          </div>
          <h3 className="font-semibold text-lg text-[#1A3D3C]">
            Health Transformation
          </h3>
          <p className="text-[#717D7E] text-sm mt-2">
            Finibus ornare senectus enim nisi ultrices malesuada sem cursus at.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
