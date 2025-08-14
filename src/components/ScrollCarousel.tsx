import React, { useEffect, useRef, useState } from "react";

interface ScrollCarouselProps {
  images: string[];
  direction?: 'left' | 'right';
  className?: string;
}

const ScrollCarousel: React.FC<ScrollCarouselProps> = ({ 
  images, 
  direction = 'right',
  className = ""
}) => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform based on scroll position and direction
  const getTransform = () => {
    const scrollFactor = scrollY * 0.3; // Reduced speed of movement
    const imageWidth = 448 + 32; // w-112 + space-x-8 = 448px + 32px gap
    const totalWidth = imageWidth * images.length;
    
    // Create seamless infinite scroll effect
    const baseTranslateX = direction === 'left' ? -scrollFactor : scrollFactor;
    const translateX = ((baseTranslateX % totalWidth) + totalWidth) % totalWidth;
    const finalTranslateX = direction === 'left' ? -translateX : translateX;
    
    return `translateX(${finalTranslateX}px)`;
  };

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div 
        className="flex space-x-8 transition-transform duration-100 ease-out"
        style={{ transform: getTransform() }}
      >
        {/* Triple the images for seamless infinite scroll */}
        {[...images, ...images, ...images].map((image, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-112 h-96 rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={image} 
              alt={`Brand ${(index % images.length) + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollCarousel;