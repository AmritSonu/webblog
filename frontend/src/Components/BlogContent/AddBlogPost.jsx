import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const AddBlogPost = () => {
  const navigate = useNavigate();
  const authToken = cookies.get("TOKEN");
  const tokenData = authToken
    ? JSON.parse(atob(authToken.split(".")[1]))
    : null;

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: tokenData.userId,
    category: "Frontend",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleHeroImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formImageData = new FormData();
    formImageData.append("heroImage", image);

    try {
      // Append other data to FormData
      Object.keys(formData).forEach((key) => {
        formImageData.append(key, formData[key]);
      });

      await axios.post(
        "https://webblog-blond.vercel.app/blogposts",
        formImageData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error("Error:", error.message);
    }

    navigate(-1);
  };

  function handleBackBtn() {
    navigate(-1);
  }
  console.log();
  return (
    <div className="container mx-auto mt-8 p-2">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Blog Post</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-md"
      >
        <div className="mt-3">
          <label
            htmlFor="heroImage"
            className="text-sm font-medium text-gray-600 border flex items-center gap-5 py-8 my-2 px-1"
          >
            Upload Hero Image
            <input
              type="file"
              id="heroImage"
              name="heroImage"
              onChange={handleHeroImageUpload}
            />
          </label>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Heading
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:outline-none"
            required
          />
        </div>
        <div className="mt-5">
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
        <div className="mt-5">
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
        <div className="mt-5">
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
