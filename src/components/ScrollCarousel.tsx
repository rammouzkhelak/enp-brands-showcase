import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  useEffect(() => {
    // Only apply scroll-based animation on desktop
    if (isMobile) return;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Calculate transform based on scroll position and direction (desktop only)
  const getTransform = () => {
    // On mobile, don't apply any transform - let user scroll freely
    if (isMobile) return 'translateX(0)';
    
    const scrollFactor = scrollY * 0.3; // Reduced speed of movement
    const imageWidth = 448 + 32; // w-112 + space-x-8 = 448px + 32px gap
    const totalWidth = imageWidth * images.length;
    
    // Create seamless infinite scroll effect with proper offset
    const baseTranslateX = direction === 'left' ? -scrollFactor : scrollFactor;
    // Start with negative offset to ensure left coverage
    const initialOffset = direction === 'left' ? -totalWidth : -totalWidth;
    const translateX = initialOffset + (baseTranslateX % totalWidth);
    
    return `translateX(${translateX}px)`;
  };

  // Mobile: Show swipeable carousel with touch gestures
  if (isMobile) {
    return (
      <div 
        className={`overflow-x-scroll scrollbar-hide ${className}`}
        style={{
          WebkitOverflowScrolling: 'touch',
          overflowY: 'hidden'
        }}
      >
        <div 
          className="flex space-x-4 px-6 py-4"
          style={{
            scrollSnapType: 'x mandatory'
          }}
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-72 h-64 rounded-lg overflow-hidden shadow-lg"
              style={{
                scrollSnapAlign: 'start'
              }}
            >
              <img 
                src={image} 
                alt={`Brand ${index + 1}`}
                className="w-full h-full object-cover pointer-events-none select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop: Keep existing scroll-based animation
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