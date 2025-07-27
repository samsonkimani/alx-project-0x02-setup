import React from "react";
import Header from "@/components/layout/Header";
import { useState, useEffect } from "react";
import { PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";

const Posts: React.FC = () => {
     const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((res) => res.json())
        .then((data) => {
            const formattedPosts: PostProps[] = data.map((post: any) => ({
            title: post.title,
            content: post.body,
            userId: post.userId,
            }));
            setPosts(formattedPosts);
            setLoading(false);
        });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <Header />
            <h1 className="text-3xl font-bold mb-4">Posts</h1>
            <p className="text-gray-700">This page will display a list of posts.</p>      
            {loading ? (
        <p>Loading posts...</p>
      ) : (
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
      )}     
        </div>
    );
}

export default Posts;