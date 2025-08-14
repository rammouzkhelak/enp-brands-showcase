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
      
      {/* Logo - only visible on hero section */}
      <div className="absolute top-10 left-6 z-40">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          ENP Brands
        </h2>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full text-white px-6">
        <div className="absolute bottom-16 left-16 right-16 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up">
            {heroContent[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 animate-slide-up leading-relaxed">
            {heroContent[currentSlide].subtitle}
          </p>
        </div>
        <div className="absolute bottom-16 right-20 animate-zoom-in">
          <CircularButton
            text="SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • "
            onClick={scrollToNext}
            arrowDirection="down"
          />
        </div>
      </div>

      {/* Pagination Dots - positioned under hamburger menu, only visible on hero */}
      <div className="absolute top-28 right-6 z-30 flex flex-col space-y-3">
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
    </section>
  );
};

export default HeroSection;