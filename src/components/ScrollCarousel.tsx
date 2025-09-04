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
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
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

  // Auto-rotation for mobile carousel
  useEffect(() => {
    if (!isMobile || !mobileScrollRef.current || isPaused) return;

    const scrollContainer = mobileScrollRef.current;
    const scrollStep = 2; // Pixels to scroll per frame
    let animationFrameId: number;

    const autoScroll = () => {
      // Check if we've reached the end, reset to beginning
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMobile, isPaused]);

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

  // Mobile: Show swipeable carousel with auto-rotation
  if (isMobile) {
    return (
      <div 
        ref={mobileScrollRef}
        className={`overflow-x-scroll scrollbar-hide ${className}`}
        style={{
          WebkitOverflowScrolling: 'touch',
          overflowY: 'hidden'
        }}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => {
          // Resume auto-rotation after 3 seconds of no interaction
          setTimeout(() => setIsPaused(false), 3000);
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex space-x-4 px-6 py-4"
          style={{
            scrollSnapType: 'x mandatory'
          }}
        >
          {/* Duplicate images for infinite scroll effect */}
          {[...images, ...images].map((image, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-72 h-64 rounded-lg overflow-hidden shadow-lg"
              style={{
                scrollSnapAlign: 'start'
              }}
            >
              <img 
                src={image} 
                alt={`Brand ${(index % images.length) + 1}`}
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