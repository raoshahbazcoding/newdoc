import bg from '../assets/Emergency/bg.png'

export default function EmergencyRepairs() {
    return (
      <section className="w-full relative">
        <div className="absolute inset-0 bg-[#1d5c5c]/80 z-10"></div>
        <div
          className="w-full h-[400px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url()",
          }}
        >

        </div>

{/* bg Image */}
     {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 ">
        <img 
          src={bg} 
          alt="Hero Background" 
          className="w-full h-full flex justify-center items-center object-cover "
        />
        <div className="absolute inset-0 bg-[#0C2F2FB2] opacity-90"></div> {/* Dark Overlay */}
      </div>

  
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
            Emergency repairs for all broken dentures:
          </h2>
          <p className="text-lg mb-8 max-w-3xl">
            If your dentures have broken, we endeavour to repair them ASAP, often on the same day.
          </p>
          <a
            href="/emergency-repairs"
            className="bg-[#319684] text-[#FFFFFF] px-25 py-4 inline-block uppercase font-medium"
          >
            LEARN MORE
          </a>
        </div>
      </section>
    )
  }
  
  