function SideBar() {
  return (
    <>
      <div className="hidden bg-gray-800 p-4  md:block">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Blog User Panel
        </h2>
        <h3 className="font-medium text-gray-950 bg-slate-50 rounded-md mt-40 pt-6 pb-6 pl-10 text-lg">
          My All Blog Posts
        </h3>
      </div>
    </>
  );
}

export { SideBar };
