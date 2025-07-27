import React from "react";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <Header />
            <h1 className="text-3xl font-bold mb-4">Posts</h1>
            <p className="text-gray-700">This page will display a list of posts.</p>           
        </div>
    );
}

export default Posts;