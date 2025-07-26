// pages/posts.tsx
import Head from "next/head";
import { GetStaticProps } from "next";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: ApiPost[] = await res.json();

  return {
    props: {
      posts: posts.map((post) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      })),
    },
    revalidate: 60,
  };
};

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PostsPage;
