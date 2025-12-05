const Gallery = () => {
  const images = [
    "/Image1.jpg",
    "/Image2.jpg",
    "/Image3.jpg",
    "/Image4.jpg",
    "/Image5.jpg",
    "/Image6.jpg",
    "/Image7.jpg",
    "/Image8.jpg",
    "/Image9.jpg",
    "/Image10.jpg",
    "/Image11.jpg",
    "/Image12.jpg",
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
