// pages/home.tsx
import Head from "next/head";
import Card from "../components/layout/common/Card"; // Import the new Card component
// Removed: import Header from '../components/layout/Header'; // Header is now in _app.tsx

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

      {/* No Header component here anymore, it's in _app.tsx */}

      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-12">
          Welcome to the Home Page!
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center mb-12">
          This page demonstrates the reusability of the `Card` component.
        </p>

        <div className="flex flex-wrap justify-center">
          <Card
            title="Next.js Basics"
            content="Learn how to get started with Next.js, including file-system routing and data fetching concepts."
          />
          <Card
            title="TypeScript Power"
            content="Explore the benefits of TypeScript for building scalable and maintainable React applications."
          />
          <Card
            title="Tailwind CSS Magic"
            content="Discover how Tailwind CSS simplifies styling with utility-first classes for rapid UI development."
          />
          <Card
            title="Reusable Components"
            content="Understand the importance of creating modular and reusable components for efficient development."
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
