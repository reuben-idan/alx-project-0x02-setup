// pages/users.tsx
import Head from "next/head";
import { useState, useEffect } from "react";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { type UserProps } from "@/interfaces";

const UsersPage = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

const UsersPage = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch users');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Head>
        <title>Users</title>
        <meta name="description" content="View our user community" />
      </Head>

      <main className="min-h-screen flex flex-col items-center p-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-12">
          Our Users
        </h1>

        {isLoading && (
          <div className="text-xl text-gray-600">Loading users...</div>
        )}

        {error && (
          <div className="text-xl text-red-600">{error}</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {users.map((user: UserProps) => (
            <UserCard
              key={user.email}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
