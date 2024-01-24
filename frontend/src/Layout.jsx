import { Navbar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
