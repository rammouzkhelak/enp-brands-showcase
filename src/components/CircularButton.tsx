import React, { useId } from "react";
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
  const pathId = useId();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`relative w-40 h-40 cursor-pointer group ${className}`} onClick={handleClick}>
      <div className="absolute inset-0 animate-rotate">
        <svg width="160" height="160" viewBox="0 0 160 160" className="overflow-visible">
          <defs>
            <path
              id={pathId}
              d="M 80,80 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            />
          </defs>
          <text className="text-[10px] font-bold fill-current uppercase tracking-wider" style={{ letterSpacing: '0.15em' }}>
            <textPath href={`#${pathId}`} startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        {arrowDirection === 'down' ? (
          <ArrowDown className="w-8 h-8 text-current transition-all duration-300 group-hover:scale-110 group-hover:translate-y-2" />
        ) : (
          <ArrowRight className="w-8 h-8 text-current transition-transform group-hover:scale-110" />
        )}
      </div>
    </div>
  );
};

export default CircularButton;