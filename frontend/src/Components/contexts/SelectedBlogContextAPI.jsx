import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const SelectedBlogContext = createContext();

export function SelectedBlogContextAPI({ children }) {
  const [selectedBlog, setSelectedBlog] = useState(null);
  return (
    <SelectedBlogContext.Provider value={{ selectedBlog, setSelectedBlog }}>
      {children}
    </SelectedBlogContext.Provider>
  );
}
SelectedBlogContextAPI.propTypes = {
  children: PropTypes.node.isRequired,
};
