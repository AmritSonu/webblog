import "./App.css";
// import { useState } from "react";
import { Login } from "./Components/Login";
import { Navbar } from "./Components/NavBar";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import { Register } from "./Components/Register";
import { MainBlog } from "./Components/BlogContent/MainBlog";
import { Footer } from "./Components/Footer";
import { UpdaterMainBox } from "./Components/UpdaterMainBox";
import { NotFound } from "./Components/NotFound";
import { BlogProvider } from "./Components/contexts/BlogContextAPI";

function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={<UpdaterMainBox />} />
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Blog Routes */}
          <Route path="/blog" element={<Outlet />}>
            {/* Parent route for /blog */}
            <Route index element={<UpdaterMainBox />} />
            {/* This will render UpdaterMainBox when /blog is accessed */}
            <Route path=":id" element={<MainBlog />} />{" "}
            {/* This will render MainBlog for specific IDs within /blog */}
            <Route path="frontend/:id?" element={<UpdaterMainBox />} />
            <Route path="backend/:id?" element={<UpdaterMainBox />} />
            <Route path="database/:id?" element={<UpdaterMainBox />} />
            <Route path="other/:id?" element={<UpdaterMainBox />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
