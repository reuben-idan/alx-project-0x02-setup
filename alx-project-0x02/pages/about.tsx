// pages/about.tsx
import Head from "next/head";
// Removed: import Header from '../components/layout/Header'; // Header is now in _app.tsx

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about the ALX Next.js project."
        />
      </Head>

      {/* No Header component here anymore, it's in _app.tsx */}

      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-green-50 to-teal-50">
        <h1 className="text-5xl font-extrabold text-green-700 mb-6">
          About This Project
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center">
          This project is part of the ALX Software Engineering program, focusing
          on Next.js, TypeScript, and Tailwind CSS fundamentals.
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
