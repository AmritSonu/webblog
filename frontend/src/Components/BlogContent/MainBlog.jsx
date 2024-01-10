import { User } from "./User";
import { BlogContent } from "./BlogContent";
export function MainBlog() {
  return (
    <div className="w-4/5 mr-auto ml-auto">
      <User />
      <BlogContent />
      <CommentSection />
    </div>
  );
}
function CommentSection() {
  return (
    <div>
      <h1 className="font-semibold text-3xl center mt-12">
        Leave Us a Comment
      </h1>
      <div className="border-2"></div>
      <span className="font-bold text-mainColor-400 text-sm">3 COMMENTS</span>
      <EachComment />
      <EachComment />
      <EachComment />
    </div>
  );
}
function EachComment() {
  return (
    <div className="border-2 mt-8 mb-8 flex gap-2 p-1">
      <img
        className="w-10 h-10"
        src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
        alt="user"
      />
      <div>
        <span className="font-semibold text-sm text-gray-600">@rejan426</span>
      </div>
      <p className="text-lg font-mono self-end">Amazing Article..</p>
    </div>
  );
}
