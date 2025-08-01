import React from 'react';

const ValuesSection = () => {
  const values = [
    {
      title: "Human-Centered Innovation",
      description: "We put people first in everything we build, ensuring our AI serves humanity."
    },
    {
      title: "Global Impact", 
      description: "We believe in breaking down barriers and connecting people across borders."
    },
    {
      title: "Continuous Learning",
      description: "We foster a culture of curiosity, growth, and intellectual humility."
    },
    {
      title: "Transparency & Trust",
      description: "We operate with openness, honesty, and integrity in all our relationships."
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6">Our Values & Culture</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            We're building more than just a company – we're creating a movement that transforms lives through innovative immigration solutions. Join us in changing the world, one migration at a time.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
