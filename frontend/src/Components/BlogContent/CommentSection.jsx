import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function CommentSection() {
  const [selectedBlog, setSelectedBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/blogposts/comments/${id}`)
      .then((res) => {
        setSelectedBlog(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });
  }, [id]);

  return (
    <div>
      <h1 className="font-semibold text-3xl center mt-12">
        Leave Us a Comment
      </h1>
      <div className="border-2"></div>
      <p className="font-bold text-mainColor-400 text-sm">
        {selectedBlog.comments
          ? `${selectedBlog.comments.length} Comments`
          : "0 Comments"}
      </p>

      {selectedBlog.comments &&
        selectedBlog.comments.map((comment) => (
          <div className="mt-8 mb-8 flex gap-2 p-1" key={comment._id}>
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1609349744982-0de6526d978b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="user"
            />

            <div className="bg-gray-200 p-1.5 rounded-lg w-2/3">
              <span className="font-semibold text-sm">
                {comment.user.username}
              </span>
              <p className="text-sm font-sans text-gray mt-1">{comment.text}</p>
              <div className="flex gap-3 text-xs font-bold text-gray-600">
                <span className="hover:cursor-pointer">Like</span>
                <span className="hover:cursor-pointer">Replay</span>
                <span className="hover:cursor-pointer">1 hour </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
