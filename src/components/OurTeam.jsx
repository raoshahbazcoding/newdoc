const doc1 = "/doc1.png"
const doc2 = "/doc2.png"
const doc3 = "/docs1.png"
const doc4 = "/docs2.png"

const teamMembers = [
  {
    name: "Stacia McCahan",
    role: "Registered Mental Health",
    image: doc3,
  },
  {
    name: "Katie Stuart",
    role: "LMHC",
    image: doc4,
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
    <div className="  mb-30 bg-white  flex flex-col items-center justify-center  " >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our dedicated team of mental health professionals is committed to providing personalized care, guidance, and support. With a compassionate approach and evidence-based techniques.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto  ">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-75 object-cover"
            />
            <div className="p-8">
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
