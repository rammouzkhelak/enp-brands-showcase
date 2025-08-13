import React, { useState, useEffect } from "react";
import CircularButton from "./CircularButton";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";
import hero5 from "../assets/hero-5.jpg";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [hero1, hero2, hero3, hero4, hero5];
  
  const heroContent = [
    {
      title: "Empowering Tomorrow's Brands",
      subtitle: "Building the future of consumer innovation"
    },
    {
      title: "Crafting Childhood Moments",
      subtitle: "Innovative solutions for growing families"
    },
    {
      title: "Premium Lifestyle Brands",
      subtitle: "Elevating everyday experiences"
    },
    {
      title: "Global Brand Excellence",
      subtitle: "Connecting brands with worldwide markets"
    },
    {
      title: "Innovation Meets Tradition",
      subtitle: "Timeless values, modern solutions"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Images */}
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
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="heading-large mb-6 animate-slide-up">
            {heroContent[currentSlide].title}
          </h1>
          <p className="body-large mb-12 text-white/90 animate-slide-up">
            {heroContent[currentSlide].subtitle}
          </p>
          <CircularButton
            text="scroll down • scroll down • scroll down • "
            onClick={scrollToNext}
            className="animate-zoom-in"
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="fixed top-20 right-6 z-30 flex flex-col space-y-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white shadow-lg scale-125" 
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Brand Logo */}
      <div className="absolute top-6 left-6 z-30">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          ENP Brands
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;