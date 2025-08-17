import React, { useId } from "react";

interface CircularButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  imageUrl?: string;
}

const CircularButton: React.FC<CircularButtonProps> = ({ text, onClick, className = "", imageUrl }) => {
  const radius = 62;
  const circumference = 2 * Math.PI * radius;
  const pathId = useId();
  
  // Create properly spaced text with dots
  const spacedText = ` ${text} • `;
  const estimatedTextLength = spacedText.length * 6;
  const repetitions = Math.ceil(circumference / estimatedTextLength) + 1;
  const repeatedText = spacedText.repeat(repetitions);
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`relative w-40 h-40 cursor-pointer group ${className}`} onClick={handleClick}>
      {/* Hover background circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-black scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
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
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={text}
            className="w-20 h-20 object-cover rounded-full transition-all duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-gray-500">{text.charAt(0)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CircularButton;