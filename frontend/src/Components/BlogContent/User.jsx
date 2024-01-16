import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function User() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    try {
      axios.get(`/blogposts/users/userbyBlogpost/${id}`).then((res) => {
        setUser(res.data);
      });
    } catch (err) {
      console.log("Error While Fetching User from server:", err);
    }
    // Set isLoading to false after a 2-second delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [id]);
  console.log(user);
  const randomImageUrl = getRandomImageUrl();

  return (
    <div className="flex items-center justify-center gap-5 p-1 rounded-sm max-w-md mx-auto w-6/12 mt-3 bg-slate-100">
      {isLoading ? (
        <>
          <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto"></div>
          <div className="w-20 h-4 bg-gray-300"></div>
          <div className="w-20 h-4 bg-gray-300"></div>
          <div className="w-20 h-4 bg-gray-300"></div>
        </>
      ) : (
        <>
          <div>
            <img
              src={randomImageUrl}
              alt="Random Profile"
              className="w-20 h-20 rounded-full mx-auto"
            />
          </div>
          <h5 className="text-gray-600 text-center text-sm font-semibold">
            {user.username}
          </h5>
          <span className="text-gray-600 text-center  text-sm">
            Web Developer
          </span>
          <span className="text-gray-500 text-center block font-bold text-sm">
            {`${user.firstname}  ${user.lastname}`}
          </span>
        </>
      )}
    </div>
  );
}

function getRandomImageUrl() {
  const width = 200;
  const height = 200;

  const randomNum = Math.floor(Math.random() * 1000);

  return `https://picsum.photos/${width}/${height}?random=${randomNum}`;
}
