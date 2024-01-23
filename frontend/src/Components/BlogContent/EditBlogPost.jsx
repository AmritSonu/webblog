import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const EditBlogPost = () => {
  const location = useLocation();
  const { _id } = location.state;
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateEndpoint = `/blogposts/${_id}`;
    const updatedData = {
      title,
      category: "Backend",
      content,
    };
    axios
      .put(updateEndpoint, updatedData)
      .then((response) => {
        console.log("Blog post updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating blog post:", error);
      });
    navigate(-1);
  };

  return (
    <div className="container mx-auto mt-8">
      <form
        className="max-w-md mx-auto p-4 bg-white shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4">Write a Blog Post</h2>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-600"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-mainColor-400 text-white p-2 rounded-md hover:bg-mainLightcolor-300 transition duration-300"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export { EditBlogPost };
