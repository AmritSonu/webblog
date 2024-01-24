import { BlogListUserData } from "./BlogListUserData";
import BlogListHeader from "./BlogListHeader";
import { NavLink } from "react-router-dom";
import { UserProfile } from "./UserProfile";
import { SideBar } from "./SideBar";

function UserPanel() {
  return (
    <div className="container mx-auto flex">
      <SideBar />
      <div className="w-3/4 p-4">
        <UserProfile />
        <div className="flex flex-col bg-blend-overlay">
          <h1 className="font-serif text-2xl">Blog List</h1>
          <span className="font-bold">3 blogs</span>
          <NavLink
            to="/dashboard/addBlogPost"
            className="bg-mainLightcolor-300 text-white w-24 font-bold rounded-sm m-1 mt-5 p-1 pl-3"
          >
            Add New
          </NavLink>
          <div className="shadow-sm">
            <BlogListHeader />
            <BlogListUserData />
          </div>
        </div>
      </div>
    </div>
  );
}
export { UserPanel };
