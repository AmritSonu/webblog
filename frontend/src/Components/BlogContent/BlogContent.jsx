import { useLocation } from "react-router-dom";
import { User } from "./User";
import ReactHtmlParser from "react-html-parser";

export function BlogContent() {
  const location = useLocation();
  const selectedBlog = location.state.selectedBlog;

  return (
    <div className="my-5">
      <span className="block text-mainColor-400 font-medium  mb-2">
        {selectedBlog.category}
      </span>
      <h1 className="font-semibold text-4xl ">{selectedBlog.title}</h1>
      <User />
      {selectedBlog.imageUrl ? (
        <img
          src={selectedBlog.imageUrl}
          alt="Blog_Image"
          className="sm:h-96 sm:w-9/12 my-4 object-contain mx-auto"
        />
      ) : (
        ""
      )}

      <div className="mt-2 mb-2">{ReactHtmlParser(selectedBlog.content)}</div>
    </div>
  );
}
