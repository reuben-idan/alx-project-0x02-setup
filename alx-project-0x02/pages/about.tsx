// pages/about.tsx
import Head from "next/head";
import Header from "../components/layout/Header"; // Assuming Header is in layout folder

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
      <Header /> {/* Include the Header component */}
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
