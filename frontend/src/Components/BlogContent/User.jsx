import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export function User() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
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
    if (initialLoad) {
      setTimeout(() => {
        setIsLoading(false);
        setInitialLoad(false);
      }, 500);
    } else {
      setIsLoading(false);
    }
  }, [id, initialLoad]);
  return (
    <div className="flex items-center  gap-5 p-1 max-w-md w-6/12 my-5 sMobile:gap-1">
      {isLoading ? (
        <UserSkeleton />
      ) : (
        <>
          <div>
            {user.avtarUrl ? (
              <img
                src={user.avtarUrl}
                alt="Random Profile"
                className="w-16 h-16 rounded-lg tMobile:w-16 tMobile:object-contain md:w-16 md:rounded-sm"
              />
            ) : (
              <img
                src="/No_userfound.png"
                alt="Random Profile"
                className="w-16 h-16 rounded-lg tMobile:w-16 tMobile:object-contain md:w-16 md:rounded-sm"
              />
            )}
          </div>
          <span className="text-center block font-bold font-serif text-sm md:text-lg">
            {`${user.firstname}  ${user.lastname}`}
          </span>
        </>
      )}
    </div>
  );
}
function UserSkeleton() {
  return (
    <>
      <div className="animate-pulse">
        <div className="w-16 h-16 mx-auto rounded-sm bg-gray-300" />
      </div>
      <span className=" h-8 bg-gray-300 w-32 animate-pulse"></span>
    </>
  );
}
