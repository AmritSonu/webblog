import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BlogProvider } from "./Components/contexts/BlogContextAPI";
import Layout from "./Layout";
import { UserDashboard } from "./Components/userPanel/UserDashboard";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { MainBlog } from "./Components/BlogContent/MainBlog";
import { UpdaterMainBox } from "./Components/UpdaterMainBox";
import { ProtectedRoutes } from "./ProtechtedRoutes";
import { NotFound } from "./Components/NotFound";
import { WriteBlogPost } from "./Components/BlogContent/WriteBlogPost";

function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<UpdaterMainBox />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
              path="dashboard"
              element={<ProtectedRoutes Component={UserDashboard} />}
            />
            <Route path="dashboard/writeBlogPost" element={<WriteBlogPost />} />

            <Route path="/blog/:id" element={<MainBlog />} />
            <Route path="category/:category" element={<UpdaterMainBox />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
