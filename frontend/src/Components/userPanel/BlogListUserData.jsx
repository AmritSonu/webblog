import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { formatMongoDate } from "../UtilFiles/formatDate";
import { truncateContent } from "../UtilFiles/truncateContent";

const cookies = new Cookies();

function BlogListUserData() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  const navigate = useNavigate();
  const token = cookies.get("TOKEN");
  const maxLength = 100;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) return;
        const response = await axios.get("/blogposts/user/blogs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogData(response.data.userBlogs);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token, loading]);

  const handleEditBtn = (_id, blogInfo) => {
    navigate(`/dashboard/editBlogPost?id=${_id}`, { state: { _id, blogInfo } });
  };

  const handleDltBtn = (_id) => {
    setBlogToDelete(_id);
    setShowConfirmDialog(true);
  };

  const handleConfirmDelete = async () => {
    try {
      setLoading(true);
      const deleteEndpoint = `/blogposts/${blogToDelete}`;
      const response = await axios.delete(deleteEndpoint);
      console.log("Blog post deleted successfully:", response.data);
    } catch (error) {
      console.error("Error deleting blog post:", error);
    } finally {
      setBlogToDelete(null);
      setShowConfirmDialog(false);
      setInterval(() => {
        setLoading(false);
      }, 500);
    }
  };

  const handleCancelDelete = () => {
    setBlogToDelete(null);
    setShowConfirmDialog(false);
  };

  console.log("Rendering...");
  return (
    <div className="relative">
      <span className="font-bold font-serif absolute right-5 -top-16 ">
        Total Blogs: {blogData.length}
      </span>
      <h3 className="font-bold text-lg text-white text-center bg-gray-900 py-3 mt-8">
        My All BlogPost
      </h3>
      <div className="overflow-y-scroll h-96">
        {loading ? (
          <BlogListUserDataSkeleton />
        ) : blogData.length ? (
          blogData.map((blogInfo, index) => (
            <div
              className="flex justify-evenly items-center mt-5 gap-16 md:text-lg mobile:gap-0"
              key={index}
            >
              <ul className="flex flex-col justify-center gap-4 p-1 mb-10 shadow-md">
                <li>
                  <span className="font-bold mr-4">Heading: </span>
                  {truncateContent(blogInfo.title)}
                </li>
                <li>
                  <span className="font-bold mr-4">Category: </span>
                  {blogInfo.category}
                </li>
                <li>
                  <span className="font-bold mr-4">Content: </span>
                  {truncateContent(blogInfo.content, maxLength)}
                </li>
                <li>
                  <span className="font-bold mr-4">Crated At: </span>
                  {formatMongoDate(blogInfo.date)}
                </li>
              </ul>
              <div className="flex justify-center items-center">
                <div className="group relative flex flex-col justify-center p-2 rounded-md drop-shadow-xl text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#000"
                    className="w-6 h-6 mb-5 hover:cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <div className="group-hover:-translate-y-10 duration-700 relative flex items-center my-10">
                    <button
                      type="button"
                      className="hover:cursor-pointer absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm"
                      onClick={() => handleDltBtn(blogInfo._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="group-hover:-translate-y-10 duration-700 relativeitems-center block">
                    <button
                      type="button"
                      onClick={() => handleEditBtn(blogInfo._id, blogInfo)}
                      className="hover:cursor-pointer absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343 .886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <span className="text-lg font-bold mt-8 block text-center">
            You Have not Created a blog Post Yet
          </span>
        )}
      </div>
      {/*  */}
      {showConfirmDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-md shadow-md">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to delete this blog post?
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white px-4 py-2 mr-2 rounded-md"
              >
                Confirm
              </button>
              <button
                onClick={handleCancelDelete}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BlogListUserDataSkeleton() {
  return (
    <div className="flex justify-center items-center mt-5 gap-16 md:text-lg mobile:gap-0 w-full p-2">
      <div className="flex-col gap-4 w-full flex items-center justify-center mt-12">
        <div className="w-10 h-10 border-8 text-mainLightcolor-300 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full"></div>
      </div>
    </div>
  );
}

export { BlogListUserData };
