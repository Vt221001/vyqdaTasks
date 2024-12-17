import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../Components/PostCard";
import Modal from "../Components/Modal";

const MainScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsModalOpen(true);
    }
  };

  const getAllPosts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/get-all-post`
      );
      setPosts(response.data.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/delete-post/${id}`
      );
      alert("Post deleted successfully!");
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  const handleSave = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/create-post`, {
        title,
        content: description,
      });
      alert("Note saved successfully!");
      getAllPosts();
      setIsModalOpen(false);
      setDescription("");
      setTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="px-4 min-h-screen py-4 w-full">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={title}
          placeholder="Take a note..."
          className="w-full lg:w-1/2 md:w-2/3 p-3 rounded-lg border border-gray-300 shadow-sm outline-none"
          onKeyDown={handleKeyPress}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex justify-start lg:gap-6 md:gap-6 flex-wrap">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onDelete={handleDelete}
            formatDate={formatDate}
          />
        ))}
      </div>

      {isModalOpen && (
        <Modal
          title={title}
          description={description}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
          setDescription={setDescription}
        />
      )}
    </div>
  );
};

export default MainScreen;
