// import { User } from "./User";
import { BlogContent } from "./BlogContent";
import { CommentSection } from "./CommentSection";
import { CommentToBlogPost } from "./CommentToBlogPost";
import { useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const cookies = new Cookies();
export function MainBlog() {
  const navigate = useNavigate();
  const [render, setRender] = useState(false);
  const authToken = cookies.get("TOKEN");
  const tokenData = authToken
    ? JSON.parse(atob(authToken.split(".")[1]))
    : null;
  function handleForCommenting() {
    navigate("/login");
  }
  return (
    <div className="w-4/5 mr-auto ml-auto">
      <BlogContent />
      <CommentSection setRender={setRender} render={render} />
      {!tokenData ? (
        <p className="text-sm font-bold">
          <span
            className="underline font-serif font-bold text-mainColor-400 text-sm hover:cursor-pointer"
            onClick={handleForCommenting}
          >
            Login{" "}
          </span>
          For Submit your Comments💬
        </p>
      ) : (
        <CommentToBlogPost setRender={setRender} render={render} />
      )}
    </div>
  );
}
