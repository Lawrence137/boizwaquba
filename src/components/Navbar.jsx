import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          Boiz Wa Quba
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-white hover:text-yellow-400 transition duration-300">Home</a>
          <a href="#about" className="text-white hover:text-yellow-400 transition duration-300">About</a>
          <a href="#manifesto" className="text-white hover:text-yellow-400 transition duration-300">Manifesto</a>
          <a href="#gallery" className="text-white hover:text-yellow-400 transition duration-300">Gallery</a>
          <a href="#contact" className="bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-900">
          <a href="#home" className="block text-white text-center py-2 hover:bg-blue-800 transition duration-300" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="block text-white text-center py-2 hover:bg-blue-800 transition duration-300" onClick={() => setIsOpen(false)}>About</a>
          <a href="#manifesto" className="block text-white text-center py-2 hover:bg-blue-800 transition duration-300" onClick={() => setIsOpen(false)}>Manifesto</a>
          <a href="#gallery" className="block text-white text-center py-2 hover:bg-blue-800 transition duration-300" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#contact" className="block text-yellow-400 text-center py-4 font-bold hover:bg-blue-800 transition duration-300" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
