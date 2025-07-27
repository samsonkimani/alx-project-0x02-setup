import React from "react";
import Card from "@/components/common/Card";
import { Post } from "@/interfaces";
import PostModaL from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const Hone:React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [posts, setPosts] = React.useState<Post[]>([]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmitPost = (post: Post) => {
        setPosts([...posts, post]);
    };


    return (
        <div className="container mx-auto p-4">
            <Header />
            <h1 className="text-3xl font-bold mb-4">Welcome to My Application</h1>
            <p className="text-gray-700">This is the home page of the application.</p>

            <button onClick={handleOpenModal} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4">Create Post</button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <Card title="Feature 1" content="Description of feature 1." />
                <Card title="Feature 2" content="Description of feature 2." />
                <Card title="Feature 3" content="Description of feature 3." />
            </div>

            {isModalOpen && <PostModaL onClose={handleCloseModal} onSubmit={handleSubmitPost} />}
        </div>
    );
}

export default Hone;