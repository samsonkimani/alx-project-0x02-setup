import { PostModalProps, Post } from "@/interfaces";
import React from "react";

const PostModaL:React.FC<PostModalProps> = ({onClose, onSubmit }) => {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const post: Post = {
            id: Date.now().toString(),
            title: formData.get("title") as string,
            content: formData.get("content") as string,
        };
        onSubmit(post);
        onClose();
    }

    return(
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Create Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" name="title" id="title" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                        <textarea name="content" id="content" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Submit</button>
                </form>
                <button onClick={onClose} className="mt-4 text-red-600 hover:text-red-800">Close</button>
            </div>
        </div>
    )
}

export default PostModaL;