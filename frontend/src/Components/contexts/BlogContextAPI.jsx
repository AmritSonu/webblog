import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogContent, setBlogContent] = useState([]);

  // fetch data from server ...
  const fetchData = async () => {
    try {
      const response = await axios.get("/blogposts");
      setBlogContent(response.data.blogPosts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  // // Function to store data in localStorage...
  // const storeDataLocally = (data) => {
  //   localStorage.setItem("blogContent", JSON.stringify(data));
  // };

  // // Function to retrieve data from localStorage..
  // const retrieveDataLocally = () => {
  //   const storedData = localStorage.getItem("blogContent");
  //   return storedData ? JSON.parse(storedData) : [];
  // };

  // useEffect to fetch data from the server when the component mounts
  useEffect(() => {
    fetchData();
  }, [setBlogContent]);

  // // useEffect to store data in localStorage whenever blogContent changes
  // useEffect(() => {
  //   storeDataLocally(blogContent);
  // }, [blogContent]);

  return (
    <BlogContext.Provider
      value={{
        blogContent,
        setBlogContent,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

BlogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
