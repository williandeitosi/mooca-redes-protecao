"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "quarto.jpg",
    "cama.jpg",
    "corrimao.jpg",
    "corrimao2.jpg",
    "gato.jpg",
    "janela.jpg",
    "janela2.jpg",
    "menino.jpg",
    "sacada.jpg",
    "sacada2.jpg",
    "teste.jpg",
    "varanda.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <div
        className="w-full h-full flex transition-transform duration-500 ease-in-out rounded-lg"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full aspect-square md:aspect-auto md:h-full relative rounded-lg"
          >
            <Image
              src={`/images/${slide}`}
              alt={`Slide ${index + 1}`}
              className="object-cover rounded-lg"
              fill
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full w-10 h-10 hover:bg-black/75 transition-colors"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full w-10 h-10 hover:bg-black/75 transition-colors"
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
