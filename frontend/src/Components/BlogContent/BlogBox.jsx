import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../Pagination/Pagination";
let PageSize = 10;
export function BlogBox({ blogContent }) {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    if (selectedBlog) {
      navigate(`/blog/${selectedBlog._id}`, {
        state: { selectedBlog: selectedBlog },
      });
    }
  }, [selectedBlog, navigate]);

  function handleBlogClick(blog) {
    setSelectedBlog(blog);
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return blogContent.slice(firstPageIndex, lastPageIndex);
  }, [blogContent, currentPage]);

  return (
    <div>
      {currentTableData.map((eachblogContent) => (
        <div
          key={eachblogContent._id}
          onClick={() => handleBlogClick(eachblogContent)}
        >
          <div className="flex justify-center py-5 items-center font-semibold gap-5 m-1 hover:cursor-pointer relative my-4 tMobile:flex-col mb-10 shadow">
            <span className="absolute top-0 right-0 bg-mainColor-400 text-white p-1 font-bold  mobile:text-vs">
              {eachblogContent.category}
            </span>
            <div className="w-10/12 sm:w-6/6 md:w-5/6 lg:w-3/6">
              {eachblogContent.imageUrl ? (
                <img
                  className="object-cover "
                  src={eachblogContent.imageUrl}
                  alt="blog_pic"
                />
              ) : (
                <img
                  className="object-cover border-xl"
                  src="/No_image.jpg"
                  alt="blog_pic"
                />
              )}
            </div>
            <div>
              <h1 className=" md:text-lg">{eachblogContent.title}</h1>
              <div>
                <p className="text-sm font-mono text-gray-700 mt-1 mobile:text-vs">
                  {formatMongoDBDate(eachblogContent.date)}
                </p>

                <p className="text-xs inline-block bg-gray-700 text-white  p-1 font-semibold my-2  mobile:text-vs">
                  {eachblogContent.allComments.length === 0
                    ? "No"
                    : eachblogContent.allComments.length}{" "}
                  <span>comments</span>
                </p>

                <p className="text-sm font-light mobile:text-vs">
                  {truncateContent(eachblogContent.content)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={blogContent.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

// Extract the date Content with readable encoding....
function formatMongoDBDate(mongoDBDateString) {
  const dateObj = new Date(mongoDBDateString);
  // Extract components
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // Months are zero-based (0 = January)
  const day = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const period = hours >= 12 ? "PM" : "AM"; // Determine AM or PM
  // Convert 24-hour format to 12-hour format
  const formattedHours = hours % 12 || 12; // 0 should be converted to 12 for 12-hour format
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero if minutes < 10
  return `${year}/${month}/${day} : ${formattedHours}:${formattedMinutes} ${period}`;
}

// Short the Paragraph in frontPage...
const truncateContent = (content, maxLength = 150) => {
  if (content.length > maxLength) {
    return content.substring(0, maxLength) + "...";
  }
  return content;
};

BlogBox.propTypes = {
  blogContent: PropTypes.array.isRequired,
};
