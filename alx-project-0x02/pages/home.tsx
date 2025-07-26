// pages/home.tsx
import Head from "next/head";
import Header from "../components/layout/Header"; // Assuming Header is in layout folder

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta
          name="description"
          content="This is the Home page of the ALX Next.js project."
        />
      </Head>
      <Header /> {/* Include the Header component */}
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6">
          Welcome to the Home Page!
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center">
          This page demonstrates basic routing in a Next.js application.
          Navigate using the header links.
        </p>
      </main>
    </div>
  );
};

export default HomePage;
