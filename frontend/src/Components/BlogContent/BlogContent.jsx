import { useLocation } from "react-router-dom";

export function BlogContent() {
  const location = useLocation();
  const selectedBlog = location.state.selectedBlog;
  return (
    <div>
      <span className="text-mainColor-400 font-medium">
        {selectedBlog.category}
      </span>
      <h1 className="font-semibold text-4xl ">{selectedBlog.title}</h1>
      <p className="mt-2 mb-2">{selectedBlog.content}</p>
    </div>
  );
}
