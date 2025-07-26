// pages/posts.tsx
import Head from "next/head";
import Card from "@/components/common/Card";

const PostsPage = () => {
  const posts = [
    {
      title: "Getting Started with Next.js",
      content:
        "Learn the basics of Next.js and how to create your first application.",
    },
    {
      title: "Working with TypeScript",
      content:
        "Discover how TypeScript can improve your development experience.",
    },
    {
      title: "Styling with Tailwind CSS",
      content: "Learn how to use Tailwind CSS for rapid UI development.",
    },
  ];

  return (
    <div>
      <Head>
        <title>Posts</title>
        <meta name="description" content="View our latest posts and updates" />
      </Head>

      <main className="min-h-screen flex flex-col items-center p-8 bg-gradient-to-r from-indigo-50 to-blue-50">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-12">
          Latest Posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PostsPage;
