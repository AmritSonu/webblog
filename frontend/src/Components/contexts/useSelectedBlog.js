import { useContext } from "react";
import { SelectedBlogContext } from "./SelectedBlogContextAPI";

export default function useSelectedBlog() {
  return useContext(SelectedBlogContext);
}
