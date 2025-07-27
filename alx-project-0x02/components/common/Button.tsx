import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) => {
  const className = `
    bg-blue-600 text-white font-semibold 
    ${sizeClasses[size]} 
    ${shape} 
    hover:bg-blue-700 transition
  `;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
