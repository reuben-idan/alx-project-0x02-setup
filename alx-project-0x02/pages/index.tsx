// pages/index.tsx
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>ALX Next.js Project</title>
        <meta name="description" content="Welcome to your Next.js project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">
          Welcome to ALX Next.js Project!
        </h1>
        <p className="text-xl text-gray-700">
          This is the beginning of your comprehensive Next.js application.
        </p>
        <p className="mt-4 text-gray-500 text-sm">
          Explore `pages/index.tsx` to modify this page.
        </p>
      </main>
    </div>
  );
};

export default HomePage;
