import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { formatMongoDate } from "../UtilFiles/formatDate";
import { truncateContent } from "../UtilFiles/truncateContent";
const cookies = new Cookies();
function BlogListUserData() {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  const token = cookies.get("TOKEN");

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
      }
    };
    fetchData();
  }, [token, blogData]);

  const handleEditBtn = (_id, blogInfo) => {
    navigate(`/dashboard/editBlogPost?id=${_id}`, { state: { _id, blogInfo } });
  };

  function handleDltBtn(_id) {
    const deleteEndpoint = `/blogposts/${_id}`;
    axios
      .delete(deleteEndpoint)
      .then((response) => {
        console.log("Blog post deleted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting blog post:", error);
      });
  }

  return (
    <div className="relative">
      <span className="font-bold absolute right-5 -top-16">
        Total Blogs: {blogData.length}
      </span>

      {blogData
        ? blogData.map((blogInfo, index) => (
            <ul className="flex justify-start p-1 gap-16 border" key={index}>
              <li>{truncateContent(blogInfo.title)}</li>
              <li>{blogInfo.category}</li>
              <li>{formatMongoDate(blogInfo.date)}</li>
              <li
                className="hover:cursor-pointer"
                onClick={() => handleEditBtn(blogInfo._id, blogInfo)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                </svg>
              </li>
              <li
                className="hover:cursor-pointer"
                onClick={() => handleDltBtn(blogInfo._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            </ul>
          ))
        : "You Have not Created blog Pot yet "}
    </div>
  );
}
export { BlogListUserData };
