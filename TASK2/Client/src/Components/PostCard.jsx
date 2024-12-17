import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const PostCard = ({ post, onDelete, formatDate }) => {
  return (
    <div className="lg:w-60 md:w-60 relative bg-gray-200 mb-6 rounded-lg p-4">
      <h2 className="text-2xl text-gray-800 mb-2 font-bold">{post.title}</h2>
      <p className="text-md mb-4 text-gray-600 font-semibold leading-7 text-balance">
        {post.content}
      </p>
      <p className="text-xs">{formatDate(post.createdAt)}</p>
      <div
        onClick={() => onDelete(post.id)}
        className="absolute bottom-4 right-4 text-red-500 text-xl cursor-pointer hover:text-red-300 transition-transform duration-300"
      >
        <FaTrashAlt />
      </div>
    </div>
  );
};

export default PostCard;
