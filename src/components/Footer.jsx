const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Boiz Wa Quba. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-yellow-400 transition duration-300">Facebook</a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">Twitter</a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
