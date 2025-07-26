// pages/home.tsx
import Head from "next/head";
import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <Head>
        <title>Home Page</title>
        <meta
          name="description"
          content="Welcome to our Next.js project homepage"
        />
      </Head>

      <main className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
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
};

export default HomePage;
