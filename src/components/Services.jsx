

import Counseling from '../assets/Services/Vector-service-1.png'
import Facial from '../assets/Services/Facial.png'
import Restorative from '../assets/Services/Restorative.png'
import Dermal from '../assets/Services/Dermal.png'
import General from '../assets/Services/General.png'
import Arrows from '../assets/Services/Arrow.png'

export default function Services() {
  const services = [
    {
      icon: <img src={Counseling} alt="Counseling"  />,
      title: "Counseling",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power..",
    },
    {
      icon: <img src={Facial} alt="Facial Aesthetic" />,
      title: "Facial Aesthetic",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power..",
    },
    {
      icon: <img src={Restorative} alt="Restorative Dentist" />,
      title: "Restorative Dentist",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power..",
    },
    {
      icon: <img src={Dermal} alt="Dermal Facial Fillers" />,
      title: "Dermal Facial Fillers",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power..",
    },
    {
      icon:  <img src={General} alt="GeneralPreventative" />,
      title: "General Preventative",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power..",
    },
    {
      icon: <img src={Counseling} alt="Counseling" />,
      title: "Counseling",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power..",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-lg">What can we offer you?</p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-16">
          Wide range of <span className="text-[#1d5c5c]">Dental Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div  key={index} className={`p-8 ${index === 3 ? "bg-white shadow-2xl z-15 -mt-4  " : ""},${index === 1 ? "bg-white shadow-2xl z-15 -mt-4" : ""},${index === 5 ? "bg-white shadow-2xl z-15 -mt-4" : ""}`}>

              <div className="bg-[#225555]  p-4 inline-block rounded mb-4">{service.icon}</div>
              <h3 className="text-xl font-light mb-4">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>

              {/* giving Arrow */}
              <a href="#" className="inline-flex items-center">
                <img src={Arrows} alt="arrow" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/services" className="bg-[#1d5c5c] text-white px-8 py-4 inline-block uppercase">
            VIEW ALL SERVICES
          </a>
        </div>
      </div>
    </section>
  )
}

