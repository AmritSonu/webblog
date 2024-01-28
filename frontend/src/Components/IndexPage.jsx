import { useParams } from "react-router-dom";
import { BlogBox } from "./BlogContent/BlogBox";
import useBlog from "./contexts/useBlog";
import { useEffect, useState } from "react";

export function IndexPage() {
  const { category } = useParams();
  const { blogContent } = useBlog();
  const [filteredBlogContent, setFilteredBlogContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (category === undefined) {
      setFilteredBlogContent(blogContent);
    } else {
      const filteredContent = blogContent.filter(
        (blog) => blog.category === category
      );
      setFilteredBlogContent(filteredContent);
    }

    // Set isLoading to false after a 1-second delay only on initial load

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [category, blogContent]);

  return (
    <>
      <div className="w-4/5 mr-auto ml-auto">
        {isLoading ? (
          filteredBlogContent.map((_, index) => (
            <div
              key={index}
              className="border p-4 mb-4 hover:cursor-pointer relative animate-pulse"
            >
              <LoadingPlaceholder />
            </div>
          ))
        ) : (
          <BlogBox blogContent={filteredBlogContent} />
        )}
      </div>
    </>
  );
}
function LoadingPlaceholder() {
  return (
    <>
      <div className="absolute top-0 right-0 bg-gray-300 text-white p-1 font-thin h-4 w-16 "></div>
      <div className="flex items-center  tMobile:flex-col mb-10">
        <div className="w-2/6 h-24 bg-gray-300 mr-4"></div>
        <div>
          <h1 className="text-sm mb-2 h-4 bg-gray-300"></h1>
          <div>
            <span className="text-sm">
              <span className="h-4 w-20 bg-gray-300 inline-block mr-2"></span>
              <span className="h-4 w-20 bg-gray-300 inline-block"></span>
            </span>
          </div>
          <p className="text-sm font-light h-16 bg-gray-300 mt-2"></p>
        </div>
      </div>
    </>
  );
}
