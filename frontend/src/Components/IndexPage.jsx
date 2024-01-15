import { useParams } from "react-router-dom";
import { BlogBox } from "./BlogContent/BlogBox";
import useBlog from "./contexts/useBlog";
import { useEffect, useState } from "react";
export function IndexPage() {
  const { category } = useParams();
  const { blogContent } = useBlog();
  const [filteredBlogContent, setFilteredBlogContent] = useState([]);

  useEffect(() => {
    if (category == undefined) {
      setFilteredBlogContent(blogContent);
    } else {
      const filteredContent = blogContent.filter(
        (blog) => blog.category === category
      );
      setFilteredBlogContent(filteredContent);
    }
  }, [category, blogContent]);
  return (
    <>
      <div className="w-4/5 mr-auto ml-auto ">
        <BlogBox blogContent={filteredBlogContent} />
      </div>
    </>
  );
}
