// components/common/Button.tsx
import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  shape = "rounded-md",
  type = "button",
  className = "",
  ...props
}) => {
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  } as const;

  const shapeClasses = {
    "rounded-sm": "rounded",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  } as const;

  const baseClasses =
    "font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  const defaultClasses =
    "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300";

  const buttonClasses =
    `${baseClasses} ${defaultClasses} ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`.trim();

  return (
    <button type={type} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
