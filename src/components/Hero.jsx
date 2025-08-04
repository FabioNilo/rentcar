import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroImages } from "../data/data.js";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );

  return (
    <section id="home" className="relative h-screen overflow-hidden mt-20">
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4"></div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
    </section>
  );
};

export default HeroSection;
