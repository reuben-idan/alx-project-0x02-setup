// components/common/Card.tsx
import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm w-full transition-transform transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-600 text-base">{content}</p>
    </div>
  );
};

export default Card;
