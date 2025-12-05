const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white bg-cover bg-top" style={{ backgroundImage: "url('/Image1.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-down">Boiz Wa Quba</h1>
        <p className="text-xl md:text-3xl font-light mb-8 animate-fade-in-up">Vying for MCA, Nyathuna Ward</p>
        <a href="#manifesto" className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 transform hover:scale-105">
          My Vision
        </a>
      </div>
    </section>
  );
};

export default Hero;
