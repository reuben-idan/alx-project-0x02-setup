// pages/about.tsx
import Head from "next/head";
import Button from "@/components/common/Button";
import Layout from "@/components/layout/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>About Page</title>
        <meta
          name="description"
          content="About page showcasing our button component"
        />
      </Head>

      <main className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-12">
          About Us
        </h1>

        <div className="max-w-2xl text-center mb-12">
          <p className="text-lg text-gray-700 mb-8">
            Welcome to our project! This page demonstrates our reusable Button
            component with different sizes and shapes.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <Button size="small" shape="rounded-sm">
            Small Button
          </Button>

          <Button size="medium" shape="rounded-md">
            Medium Button
          </Button>

          <Button
            size="large"
            shape="rounded-full"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Large Button
          </Button>
        </div>

        <div className="mt-12 text-center max-w-md">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Button Variants
          </h2>
          <p className="text-gray-600">
            Our Button component supports different sizes (small, medium, large)
            and shapes (rounded-sm, rounded-md, rounded-full). It's fully
            customizable through props and additional className support.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
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
