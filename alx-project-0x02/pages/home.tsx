// pages/home.tsx
import Head from "next/head";
import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type PostData } from "@/interfaces";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([
    {
      title: "Getting Started with Next.js",
      content: "Learn about Next.js features and API. This framework makes it easy to create full-stack web applications.",
    },
    {
      title: "React Fundamentals",
      content: "Understand React concepts like components, props, and state management for building interactive UIs.",
    },
  ]);

  const handleAddPost = (newPost: PostData) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta
          name="description"
          content="Welcome to our Next.js project homepage"
        />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-12">
          Welcome to Our Project
        </h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Add New Post
        </button>

        <div className="flex flex-wrap justify-center gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </div>
  );

        <div className="flex flex-wrap justify-center gap-6">
          <Card
            title="Getting Started with Next.js"
            content="Learn about Next.js features and API. This framework makes it easy to create full-stack web applications."
          />
          <Card
            title="React Fundamentals"
            content="Understand React concepts like components, props, and state management for building interactive UIs."
          />
          <Card
            title="TypeScript Benefits"
            content="Discover how TypeScript improves your development experience with static typing and better tooling."
          />
        </div>
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
