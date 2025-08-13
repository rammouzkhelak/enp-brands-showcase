import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

interface CircularButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  arrowDirection?: 'right' | 'down';
}

const CircularButton: React.FC<CircularButtonProps> = ({ text, onClick, className = "", arrowDirection = 'right' }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`relative w-32 h-32 cursor-pointer group ${className}`} onClick={handleClick}>
      <div className="absolute inset-0 animate-rotate">
        <svg width="128" height="128" viewBox="0 0 128 128" className="overflow-visible">
          <defs>
            <path
              id={`circle-path-${Math.random()}`}
              d="M 64,64 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
          </defs>
          <text className="text-[11px] font-bold fill-current uppercase tracking-wide" style={{ letterSpacing: '0.1em' }}>
            <textPath href={`#circle-path-${Math.random()}`} startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        {arrowDirection === 'down' ? (
          <ArrowDown className="w-6 h-6 text-current transition-transform group-hover:scale-110 group-hover:translate-y-1" />
        ) : (
          <ArrowRight className="w-6 h-6 text-current transition-transform group-hover:scale-110" />
        )}
      </div>
    </div>
  );
};

export default CircularButton;