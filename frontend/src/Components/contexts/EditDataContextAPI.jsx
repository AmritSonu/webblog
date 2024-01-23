import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [editBlogData, setEditBlogData] = useState({ title: "", content: "" });

  const updateEditBlogData = (data) => {
    setEditBlogData(data);
  };

  return (
    <DataContext.Provider value={{ editBlogData, updateEditBlogData }}>
      {children}
    </DataContext.Provider>
  );
};
DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
