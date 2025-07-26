// components/common/UserCard.tsx
import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <div className="text-gray-600 mb-4">
        <p className="mb-1">
          <span className="font-medium">Email:</span> {email}
        </p>
        <div className="mt-2">
          <span className="font-medium">Address:</span>
          <p className="mt-1 text-gray-500">
            {address.street}, {address.suite}
            <br />
            {address.city}, {address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
