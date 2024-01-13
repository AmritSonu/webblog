import { useContext } from "react";
import { BlogContext } from "./BlogContextAPI";

export default function useBlog() {
  return useContext(BlogContext);
}
