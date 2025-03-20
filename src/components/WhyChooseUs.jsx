import React from 'react';
import { Users, Cog, Heart, Activity } from 'lucide-react';

function WhyChooseUS() {
  return (
    <div className="relative h-[750px] hidden md:block">
      {/* Left Background Section - Pattern */}
      <div className="absolute top-0 left-0 w-1/2 h-full z-0">
        <div className="h-full w-full bg-[#EEEFF1]">
          <div className="h-full w-full bg-pattern opacity-20" />
        </div>
      </div>

      {/* Right Background Section - Medical Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0">
        <div className="h-full w-full bg-medical">
          <div className="h-full w-full bg-teal-800/80" />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-20 h-full flex items-center justify-center px-8">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Section */}
            <div className="col-span-12 lg:col-span-5 text-teal-900 space-y-8 p-8 relative">
              <h2 className="text-[14px] uppercase tracking-[0.2em] font-bold">WHY CHOOSE US</h2>
              <h1 className="font-marcellus text-[39px] leading-[1.2] tracking-tight">
                Trusted Hands, Trusted Care: The Doctors Who Put You First
              </h1>
              <p className="text-[#828C8D] max-w-lg text-[17px] leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="inline-flex items-center px-8 py-4 border-1 font-semibold border-teal-800 text-teal-800 text-sm tracking-wider hover:bg-[#225555] hover:text-white transition-colors duration-300 mt-6">
                DISCOVER MORE →
              </button>
            </div>

            {/* Right Section - Overlapping Cards */}
            <div className="col-span-12 lg:col-span-10 lg:col-start-7 lg:-ml-16">
              <div className="bg-white p-14  ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                  {/* Integrated Personalization */}
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-[#f8f9fa] rounded-lg mx-auto flex items-center justify-center">
                      <Users className="w-8 h-8 text-teal-800" strokeWidth={1.5} />
                    </div>
                    <p className="text-xl font-bold  text-gray-900">
                      Integrated <br /> Personalization
                    </p>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      Finibus ornare senectus enim nisi ultrices malesuada sem cursus at.
                    </p>
                  </div>

                  {/* Medical Innovation */}
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-[#f8f9fa] rounded-lg mx-auto flex items-center justify-center">
                      <Cog className="w-8 h-8 text-teal-800" strokeWidth={1.5} />
                    </div>
                    <h className="text-xl font-bold text-gray-900">
                      Medical <br /> Innovation
                    </h>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      Finibus ornare senectus enim nisi ultrices malesuada sem cursus at.
                    </p>
                  </div>

                  {/* Comprehensive Attention */}
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-[#f8f9fa] rounded-lg mx-auto flex items-center justify-center">
                      <Heart className="w-8 h-8 text-teal-800" strokeWidth={1.5} />
                    </div>
                    <p className="text-xl font-bold text-gray-900">
                      Comprehensive <br /> Attention
                    </p>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      Finibus ornare senectus enim nisi ultrices malesuada sem cursus at.
                    </p>
                  </div>

                  {/* Health Transformation */}
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-[#f8f9fa] rounded-lg mx-auto flex items-center justify-center">
                      <Activity className="w-8 h-8 text-teal-800" strokeWidth={1.5} />
                    </div>
                    <p className="text-xl font-bold text-gray-900">
                      Health <br /> Transformation
                    </p>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      Finibus ornare senectus enim nisi ultrices malesuada sem cursus at.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUS;