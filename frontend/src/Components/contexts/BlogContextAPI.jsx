import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
export const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogContent, setBlogContent] = useState([]);
  useEffect(() => {
    axios
      .get("/blogposts")
      .then((res) => {
        setBlogContent(res.data.blogPosts);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
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
