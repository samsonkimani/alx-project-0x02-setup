import { type PostProps } from "@/interfaces";

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="bg-white shadow rounded-md p-4 border hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-blue-700 mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <p className="text-sm text-gray-500">Posted by user #{userId}</p>
    </div>
  );
};

export default PostCard;
