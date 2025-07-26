// pages/users.tsx
import Head from "next/head";
import { type GetStaticProps } from "next";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

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
          {users.map((user, index) => (
            <UserCard
              key={index}
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

// This function runs at build time on the server
export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      // It's good practice to log the error for debugging
      console.error(
        `Error fetching users: ${response.status} ${response.statusText}`
      );
      // Redirect to a 404 page or return an empty array/error prop
      return {
        notFound: true, // Example: If you want to show a 404 page on fetch failure
      };
      // Or, return an empty array:
      // return {
      //   props: {
      //     users: [],
      //   },
      // };
    }

    const users: UserProps[] = await response.json();

    return {
      props: {
        users, // Will be passed to the page component as props
      },
      revalidate: 60, // Optional: re-generate the page every 60 seconds in the background
    };
  } catch (error) {
    console.error("Failed to fetch users in getStaticProps:", error);
    return {
      props: {
        users: [], // Return empty array on error, or you can handle a dedicated error page
      },
    };
  }
};
