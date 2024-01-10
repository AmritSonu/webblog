export function BlogBox() {
  return (
    <div className="flex justify-center items-center font-semibold gap-5 bg-white m-1 hover:cursor-pointer relative ">
      <span className="absolute top-0 right-0 bg-mainColor-400 text-white p-1  font-thin">
        frontend
      </span>
      <div className="w-2/6">
        <img
          className="object-cover border-xl"
          src="https://source.unsplash.com/random/?Frontend/"
          alt="blog_pic"
        />
      </div>
      <div>
        <h1 className="text-sm">
          ChatGPT Vs Bard: Which is better for coding?
        </h1>
        <div>
          <span className="text-sm">12 may,2022</span>
          <p className="text-sm">
            6 <span>comments</span>
          </p>
          <p className="text-sm font-light">
            We test out which tool is best at code generation, problem solving,
            refactoring code, providing debugging assistance,...
          </p>
        </div>
      </div>
    </div>
  );
}
