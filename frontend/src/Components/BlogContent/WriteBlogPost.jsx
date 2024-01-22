// WriteBlogPostForm.js

import { useState } from "react";

const WriteBlogPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Title:", title);
    console.log("Content:", content);
    // Add more logic as needed
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

export { WriteBlogPost };
