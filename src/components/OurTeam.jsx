const doc1 = "/doc1.png";
const doc2 = "/doc2.png";

const teamMembers = [
  {
    name: "Stacia McCahan",
    role: "Registered Mental Health",
    image: doc1,
  },
  {
    name: "Katie Stuart",
    role: "LMHC",
    image: doc2,
  },
  {
    name: "Alyssa Finkelstein",
    role: "Registered Mental Health",
    image: doc1,
  },
  {
    name: "Alyssa Finkelstein",
    role: "Registered Mental Health",
    image: doc2,
  },
];

const OurTeam = () => {
  return (
    <section className="py-5 md:py-5 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4">
          Our Team
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto">
          Our dedicated team of mental health professionals is committed to providing personalized care, guidance, and support. With a compassionate approach and evidence-based techniques.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow rounded-lg overflow-hidden text-center">
              {/* Team Member Image */}
              <img src={member.image} alt={member.name} className="w-full h-75 object-cover" />
              
              {/* Team Member Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
