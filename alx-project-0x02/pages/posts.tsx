import React from "react";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";

// Component definition
const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <p className="text-gray-700 mb-6">This page displays a list of posts fetched at build time.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
    revalidate: 60, 
  };
}
