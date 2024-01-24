import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const AddBlogPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    heading: "",
    content: "",
    // author: "",
    category: "Frontend",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., API request to save the blog post
    console.log("Form submitted:", formData);
  };
  function handleBackBtn() {
    navigate(-1);
  }
  return (
    <div className="w-6/12 mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Blog Post</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <div>
          <label
            htmlFor="heading"
            className="block text-sm font-medium text-gray-600"
          >
            Heading
          </label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-600"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Database">Database</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-mainColor-400 text-white py-2 px-4 rounded-md hover:bg-mainLightcolor-300 focus:outline-none focus:ring focus:border-blue-300"
          >
            Add Post
          </button>
          <button
            onClick={handleBackBtn}
            type="button"
            className="bg-mainColor-400 text-white py-2 px-4 rounded-md hover:bg-mainLightcolor-300 focus:outline-none focus:ring focus:border-blue-300 ml-5"
          >
            &larr; Back
          </button>
        </div>
      </form>
    </div>
  );
};

export { AddBlogPost };
