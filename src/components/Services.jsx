const Counseling = "/Vector-service-1.png";
const Facial = "/Facial.png";
const Restorative = "/Restorative.png";
const Dermal = "/Dermal.png";
const General = "/General.png";
const Arrows = "/Arrow.png";

export default function Services() {
  const services = [
    {
      icon: <img src={Counseling} alt="Counseling" />,
      title: "Counseling",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power.",
    },
    {
      icon: <img src={Facial} alt="Facial Aesthetic" />,
      title: "Facial Aesthetic",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power.",
    },
    {
      icon: <img src={Restorative} alt="Restorative Dentist" />,
      title: "Restorative Dentist",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power.",
    },
    {
      icon: <img src={Dermal} alt="Dermal Facial Fillers" />,
      title: "Dermal Facial Fillers",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power.",
    },
    {
      icon: <img src={General} alt="General Preventative" />,
      title: "General Preventative",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power.",
    },
    {
      icon: <img src={Counseling} alt="Counseling" />,
      title: "Counseling",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power.",
    },
  ];

  return (
    <section className="pb-8 md:py-10">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-4">
          <p className="text-lg">What can we offer you?</p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-16">
          Wide range of <span className="text-[#1d5c5c]">Dental Services</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8   shadow-2xl  rounded-lg"
            >
              {/* Icon */}
              <div className="bg-[#225555] p-4 inline-block rounded mb-4">
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-light mb-4">{service.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>

              {/* Arrow Link */}
              <a href="#" className="inline-flex items-center">
                <img src={Arrows} alt="arrow" />
              </a>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-16">
          <a href="#" className="bg-[#1d5c5c] text-white px-8 py-4 inline-block uppercase">
            VIEW ALL SERVICES
          </a>
        </div>
      </div>
    </section>
  );
}
