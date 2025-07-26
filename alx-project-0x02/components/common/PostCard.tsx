// components/common/PostCard.tsx
import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="text-sm text-gray-500">Author ID: {userId}</div>
    </div>
  );
};

export default PostCard;
