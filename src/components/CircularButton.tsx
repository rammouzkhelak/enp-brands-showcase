import React, { useId } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

interface CircularButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  arrowDirection?: 'right' | 'down';
}

const CircularButton: React.FC<CircularButtonProps> = ({ text, onClick, className = "", arrowDirection = 'right' }) => {
  const radius = 62;
  const circumference = 2 * Math.PI * radius;
  const pathId = useId();
  
  // Calculate how many times to repeat the text to fill the circle
  const estimatedTextLength = text.length * 6; // Approximate character width
  const repetitions = Math.ceil(circumference / estimatedTextLength) + 1; // Add one extra for seamless loop
  const repeatedText = text.repeat(repetitions);
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`relative w-40 h-40 cursor-pointer group ${className}`} onClick={handleClick}>
      {/* Hover background circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-28 h-28 rounded-full bg-black scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
      </div>
      
      <div className="absolute inset-0 animate-rotate">
        <svg width="160" height="160" viewBox="0 0 160 160" className="overflow-visible">
          <defs>
            <path
              id={pathId}
              d="M 80,80 m -62,0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
            />
          </defs>
          <text className="text-[9px] font-bold fill-current uppercase tracking-wide" style={{ letterSpacing: '0.12em' }}>
            <textPath href={`#${pathId}`} startOffset="0%">
              {repeatedText}
            </textPath>
          </text>
        </svg>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {arrowDirection === 'down' ? (
          <ArrowDown className="w-9 h-9 text-current group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:translate-y-2" />
        ) : (
          <ArrowRight className="w-9 h-9 text-current group-hover:text-white transition-all duration-300 group-hover:scale-110" />
        )}
      </div>
    </div>
  );
};

export default CircularButton;