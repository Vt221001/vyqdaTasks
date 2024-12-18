import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const PostCard = ({ post, onDelete, formatDate }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-4 mb-6 shadow-md w-full sm:w-auto break-words max-w-full">
      <h2 className="text-xl md:text-2xl text-gray-800 mb-2 font-bold">
        {post.title}
      </h2>
      <p className="text-sm md:text-md text-gray-600 font-semibold leading-7 mb-4 break-words">
        {post.content}
      </p>
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-500">{formatDate(post.createdAt)}</p>
        <button
          onClick={() => onDelete(post.id)}
          className="inline-flex items-center pl-2 text-red-500 hover:text-red-300 transition duration-300"
          aria-label="Delete post"
        >
          <FaTrashAlt className="text-lg md:text-xl" />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
