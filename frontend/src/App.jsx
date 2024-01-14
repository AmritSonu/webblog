import "./App.css";
import { Login } from "./Components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Register } from "./Components/Register";
import { MainBlog } from "./Components/BlogContent/MainBlog";
import { UpdaterMainBox } from "./Components/UpdaterMainBox";
import { NotFound } from "./Components/NotFound";
import { BlogProvider } from "./Components/contexts/BlogContextAPI";
import Layout from "./Layout";
function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<UpdaterMainBox />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/blog/:id" element={<MainBlog />} />
            <Route path="category/frontend" element={<UpdaterMainBox />} />
            <Route path="category/backend" element={<UpdaterMainBox />} />
            <Route path="category/database" element={<UpdaterMainBox />} />
            <Route path="category/other" element={<UpdaterMainBox />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
}
export default App;

// <BlogProvider>
//       <SelectedBlogContextAPI>
//         <BrowserRouter>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Outlet />}>
//               <Route path="login" element={<Login />} />
//               <Route path="register" element={<Register />} />
//               <Route path="" element={<UpdaterMainBox />} />
//             </Route>

//             <Route path="/blog" element={<Outlet />}>
//               <Route path=":id" element={<MainBlog />} />
//               <Route path="frontend" element={<UpdaterMainBox />} />
//               <Route path="backend/" element={<UpdaterMainBox />} />
//               <Route path="database/" element={<UpdaterMainBox />} />
//               <Route path="other/" element={<UpdaterMainBox />} />
//             </Route>
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//           <Footer />
//         </BrowserRouter>
//       </SelectedBlogContextAPI>
//     </BlogProvider>
