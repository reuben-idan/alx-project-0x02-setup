// pages/users.tsx
import Head from "next/head";
import { type GetStaticProps } from "next"; // Import GetStaticProps type
// import { useState, useEffect } from "react"; // No longer needed for data fetching
import UserCard from "@/components/common/UserCard";
// import Header from "@/components/layout/Header"; // Header is already in _app.tsx
import { type UserProps } from "@/interfaces"; // Using the defined UserProps

// Define the props type for the UsersPage component
interface UsersPageProps {
  users: UserProps[];
}

const UsersPage = ({ users }: UsersPageProps) => {
  // No need for isLoading, error states for getStaticProps
  // const [users, setUsers] = useState<UserProps[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState("");

  // Data fetching logic moved to getStaticProps
  // useEffect(() => { ... }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header is now managed globally in _app.tsx, so no need to import/render here */}
      {/* <Header /> */}
      <Head>
        <title>Users</title>
        <meta name="description" content="View our user community" />
      </Head>

      <main className="min-h-screen flex flex-col items-center p-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-12">
          Our Users
        </h1>

        {/* Loading and Error states are not typical for getStaticProps,
            as data is fetched at build time. */}
        {/* {isLoading && (
          <div className="text-xl text-gray-600">Loading users...</div>
        )}
        {error && (
          <div className="text-xl text-red-600">{error}</div>
        )} */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {users.map((user: UserProps) => (
            <UserCard
              key={user.id} // Using user.id as key, which is unique
              name={user.name}
              email={user.email}
              address={user.address} // Pass the full address object
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
