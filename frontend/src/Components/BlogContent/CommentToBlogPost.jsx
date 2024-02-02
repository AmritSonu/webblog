import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";

import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const CommentToBlogPost = ({ setRender }) => {
  const [comment, setComment] = useState("");

  const { id } = useParams();
  const authToken = cookies.get("TOKEN");
  const tokenData = authToken
    ? JSON.parse(atob(authToken.split(".")[1]))
    : null;

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    postComment();
    setRender(true);
    setComment("");
  };
  const commentData = {
    text: comment,
    user: tokenData.userId,
    blogPost: id,
  };
  const postComment = async () => {
    try {
      const response = await axios.post("https://webblog-blond.vercel.app/blogposts/comments", commentData);
      console.log(response);
      setRender(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="mt-20 mb-5">
      <h1 className="font-bold font-serif text-slate-600">
        Write a Comment on This Post..
      </h1>

      <form onSubmit={handleCommentSubmit}>
        <div className="mb-4">
          <textarea
            className="w-4/6 p-2 border border-gray-300 rounded h-18"
            placeholder="Write a comment..."
            value={comment}
            onChange={handleCommentChange}
            required
          />
        </div>
        <button
          className="px-4 py-2 bg-mainColor-400 text-white rounded hover:bg-mainLightcolor-300"
          type="submit"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

CommentToBlogPost.propTypes = {
  setRender: PropTypes.any,
};

export { CommentToBlogPost };
