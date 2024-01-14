import { useLocation, useParams } from "react-router-dom";

export function CommentSection() {
  const location = useLocation();
  const selectedBlog = location.state.selectedBlog;
  return (
    <div>
      <h1 className="font-semibold text-3xl center mt-12">
        Leave Us a Comment
      </h1>
      <div className="border-2"></div>
      <p className="font-bold text-mainColor-400 text-sm">
        {selectedBlog.allComments.length}
        <span> Comments</span>
      </p>
      <EachComment />
    </div>
  );
}
function EachComment() {
  const location = useLocation();
  const selectedBlog = location.state.selectedBlog;
  const { id } = useParams();
  console.log(id);
  return (
    <>
      {selectedBlog.allComments.map((eachComment) => (
        <div
          className="border-2 mt-8 mb-8 flex gap-2 p-1"
          key={eachComment._id}
        >
          <img
            className="w-10 h-10"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
            alt="user"
          />
          <div>
            <span className="font-semibold text-sm text-gray-600">
              @rejan426
            </span>
          </div>
          <p className="text-lg font-mono self-end">{eachComment.comments}</p>
        </div>
      ))}
    </>
  );
}
