import React from "react";

const teamMembers = [
  {
    name: "Stacia McCahan",
    role: "Registered Mental Health",
    image: "src/assets/doc1.png",
  },
  {
    name: "Katie Stuart",
    role: "LMHC",
    image: "src/assets/doc2.png",
  },
  {
    name: "Alyssa Finkelstein",
    role: "Registered Mental Health",
    image: "src/assets/doc1.png",
  },
  {
    name: "Alyssa Finkelstein",
    role: "Registered Mental Health",
    image: "src/assets/doc2.png",
  },
];

const OurTeam = () => {
  return (
    <div className="py-16 bg-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our dedicated team of mental health professionals is committed to providing personalized care, guidance, and support. With a compassionate approach and evidence-based techniques.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
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
