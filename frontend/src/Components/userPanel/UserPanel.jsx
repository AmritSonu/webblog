import { BlogListUserData } from "./BlogListUserData";
import { NavLink } from "react-router-dom";
import { UserProfile } from "./UserProfile";
import { SideBar } from "./SideBar";

function UserPanel() {
  return (
    <div className="container mx-auto flex md:flex-none">
      <SideBar />
      <div className="md:w-3/4 p-4 w-11/12 mx-auto ">
        <UserProfile />
        <div className="flex flex-col bg-blend-overlay my-5">
          <h1 className="font-serif text-2xl">Blog List</h1>
          <NavLink
            to="/dashboard/addBlogPost"
            className="bg-mainLightcolor-300 text-white w-24 font-bold rounded-sm m-1 mt-5 p-1 pl-3"
          >
            Add New
          </NavLink>
          <div className="shadow-sm">
            <BlogListUserData />
          </div>
        </div>
      </div>
    </div>
  );
}
export { UserPanel };
