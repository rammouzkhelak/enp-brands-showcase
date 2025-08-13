import React from "react";
import { ArrowRight } from "lucide-react";

interface CircularButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const CircularButton: React.FC<CircularButtonProps> = ({ text, onClick, className = "" }) => {
  const textLength = text.length;
  const radius = 35; // Radius for text placement
  const circumference = 2 * Math.PI * radius;
  const charSpacing = circumference / textLength;

  return (
    <div className={`circular-button ${className}`} onClick={onClick}>
      <div className="circular-button-text">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <defs>
            <path
              id="circle-path"
              d="M 40,40 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text className="text-xs font-medium fill-current">
            <textPath href="#circle-path" startOffset="0%">
              {text.split("").map((char, index) => (
                <tspan key={index} dx={index === 0 ? "0" : `${charSpacing - 8}px`}>
                  {char}
                </tspan>
              ))}
            </textPath>
          </text>
        </svg>
      </div>
      <ArrowRight className="circular-button-arrow" />
    </div>
  );
};

export default CircularButton;