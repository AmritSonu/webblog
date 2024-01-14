import { User } from "./User";
import { BlogContent } from "./BlogContent";
import { CommentSection } from "./CommentSection";
export function MainBlog() {
  return (
    <div className="w-4/5 mr-auto ml-auto">
      <User />
      <BlogContent />
      <CommentSection />
    </div>
  );
}
