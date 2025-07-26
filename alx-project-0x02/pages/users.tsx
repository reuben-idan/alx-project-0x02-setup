// pages/users.tsx
import Head from "next/head";
import { GetStaticProps } from "next";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 60,
  };
};

const UsersPage = ({ users }: UsersPageProps) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {users.map((user) => (
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
