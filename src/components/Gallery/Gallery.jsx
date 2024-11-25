import React, { useState } from "react";

const Gallery = () => {
  const slides = [
    "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft16.svg",
    "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft19.svg",
    "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft9.svg",
    "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft17.svg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery bg-slate-300 h-screen py-10 px-6 md:px-8 lg:px-12">
      <div className="max-w-full mx-auto text-center">
        <p className="text-orange-600 text-2xl md:text-3xl font-bold mb-4">
          Famous Gallery
        </p>
        <div className="relative">
          <div className="flex justify-center items-center overflow-hidden">
            <img
              src={slides[currentIndex]}
              alt={`Gallery Slide ${currentIndex + 1}`}
              className="object-cover h-60 md:h-80 w-full hover:-translate-y-2 transition-transform"
            />
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer bg-gray-200 p-2 rounded-full shadow"
          >
            <img
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg"
              alt="Previous"
              className="w-6 h-6 rotate-180"
            />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer bg-gray-200 p-2 rounded-full shadow"
          >
            <img
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg"
              alt="Next"
              className="w-6 h-6"
            />
          </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-orange-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>


      <div>
        <div className="bg-red-600 py-20 flex justify-center ">my new design coming soon !</div>
      </div>
    </div>
  );
};

export default Gallery;
