import React from "react";
import { ArrowRight } from "lucide-react";

interface CircularButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const CircularButton: React.FC<CircularButtonProps> = ({ text, onClick, className = "" }) => {
  const radius = 60; // Larger radius for bigger buttons
  const circumference = 2 * Math.PI * radius;
  const textLength = text.length;
  const charSpacing = circumference / textLength;

  return (
    <div className={`relative w-32 h-32 cursor-pointer group ${className}`} onClick={onClick}>
      <div className="absolute inset-0 animate-rotate">
        <svg width="128" height="128" viewBox="0 0 128 128">
          <defs>
            <path
              id="circle-path"
              d="M 64,64 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
          </defs>
          <text className="text-xs font-semibold fill-current uppercase tracking-wider">
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
      <div className="absolute inset-0 flex items-center justify-center">
        <ArrowRight className="w-6 h-6 text-current transition-transform group-hover:scale-110" />
      </div>
    </div>
  );
};

export default CircularButton;