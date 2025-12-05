const Manifesto = () => {
  const manifestoPoints = [
    {
      title: "Youth Empowerment",
      description: "Creating opportunities for the youth through skills training, and support for small businesses.",
      icon: "🎓"
    },
    {
      title: "Infrastructure Development",
      description: "Improving roads, water supply, and other essential services to uplift the community.",
      icon: "🏗️"
    },
    {
      title: "Quality Education",
      description: "Ensuring every child has access to quality education and learning resources.",
      icon: "📚"
    },
     {
      title: "Accessible Healthcare",
      description: "Working towards affordable and accessible healthcare for all residents of Nyathuna Ward.",
      icon: "⚕️"
    },
    {
      title: "Agricultural Support",
      description: "Empowering local farmers with modern farming techniques and access to markets.",
      icon: "🌱"
    },
    {
      title: "Transparent Leadership",
      description: "A commitment to open, accountable, and inclusive governance for the people.",
      icon: "🤝"
    }
  ];

  return (
    <section id="manifesto" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">My Manifesto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manifestoPoints.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{point.title}</h3>
              <p className="text-gray-700">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
