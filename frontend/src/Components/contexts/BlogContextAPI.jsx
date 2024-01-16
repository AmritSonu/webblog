import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogContent, setBlogContent] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setIsLoading(true);
        const response = await axios.get("/blogposts");
        setBlogContent(response.data.blogPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
      // finally {
      //   // setIsLoading(false);
      // }
    };
    fetchData();
  }, []);

  return (
    <BlogContext.Provider value={{ blogContent, setBlogContent }}>
      {children}
    </BlogContext.Provider>
  );
}

BlogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
