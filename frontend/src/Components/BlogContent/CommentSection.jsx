import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function CommentSection({ render }) {
  const [selectedBlogComments, setselectedBlogComments] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`/blogposts/comments/${id}`);
        setselectedBlogComments(response.data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, render]);

  return (
    <div>
      <h1 className="font-semibold text-3xl center mt-12">
        Leave Us a Comment
      </h1>
      <div className="border-2"></div>
      <p className="font-bold text-mainColor-400 text-sm">
        {selectedBlogComments.comments
          ? `${selectedBlogComments.comments.length} Comments`
          : "0 Comments"}
      </p>

      {selectedBlogComments.comments &&
        selectedBlogComments.comments.map((comment) => (
          <div className="mt-8 mb-8 flex gap-2 p-1" key={comment._id}>
            {isLoading ? (
              <>
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="bg-gray-200 p-1.5 rounded-lg w-2/3">
                  <span className="font-semibold text-sm bg-gray-300 h-4 w-20 inline-block"></span>
                  <p className="text-sm font-sans text-gray mt-1 bg-gray-300 h-4 w-4/5 inline-block"></p>
                  <div className="flex gap-3 text-xs font-bold text-gray-600">
                    <span className="hover:cursor-pointer bg-gray-300 h-4 w-10 inline-block"></span>
                    <span className="hover:cursor-pointer bg-gray-300 h-4 w-12 inline-block"></span>
                    <span className="hover:cursor-pointer bg-gray-300 h-4 w-16 inline-block"></span>
                  </div>
                </div>
              </>
            ) : (
              <>
                {comment.user && comment.user.avtarUrl ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={comment.user.avtarUrl}
                    alt="blog_pic"
                  />
                ) : (
                  <img
                    className="w-10 h-10 rounded-full"
                    src="/No_userfound.png"
                    alt="blog_pic"
                  />
                )}
                <div className="bg-gray-200 p-1.5 rounded-lg w-2/3">
                  <span className="font-semibold text-sm">
                    {comment.user && comment.user.firstname}{" "}
                    {comment.user && comment.user.lastname}
                  </span>
                  <p className="text-sm font-sans text-gray mt-1">
                    {comment.text}
                  </p>
                  <div className="flex gap-3 text-xs font-bold text-gray-600">
                    {/* <span className="hover:cursor-pointer">Like</span> */}
                    <span className="hover:cursor-pointer">1 hour </span>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
}

// Add PropTypes to your functional component
CommentSection.propTypes = {
  render: PropTypes.any,
};
