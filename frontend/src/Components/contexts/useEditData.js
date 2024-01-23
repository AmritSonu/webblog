import { useContext } from "react";
import { DataContext } from "./EditDataContextAPI";

export const useEditData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};
