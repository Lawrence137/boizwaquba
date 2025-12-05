const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src="/Image1.jpg" alt="Boiz Wa Quba" className="rounded-full shadow-lg mx-auto w-80 h-80 object-cover" />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Boiz Wa Quba is a dedicated and passionate leader committed to serving the people of Nyathuna Ward. With a deep understanding of the community's needs, he is determined to bring positive change and development to the area.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              His focus is on empowering the youth, improving infrastructure, and ensuring that every voice in the community is heard. He believes in a transparent and accountable leadership that works for the people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
