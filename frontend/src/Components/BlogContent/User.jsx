export function User() {
  const randomImageUrl = getRandomImageUrl(); // Assuming you have this function defined elsewhere

  return (
    <div className="flex items-center justify-center gap-5 p-1 rounded-sm max-w-md mx-auto w-6/12 mt-3 bg-slate-100">
      <div>
        <img
          src={randomImageUrl}
          alt="Random Profile"
          className="w-20 h-20 rounded-full mx-auto"
        />
      </div>
      <h4 className="text-gray-600 text-center text-sm font-semibold">
        John Doe
      </h4>
      <p className="text-gray-600 text-center  text-sm">Web Developer</p>
      <span className="text-gray-500 text-center block">@userJohn131</span>
    </div>
  );
}
function getRandomImageUrl() {
  const width = 200;
  const height = 200;

  const randomNum = Math.floor(Math.random() * 1000);

  return `https://picsum.photos/${width}/${height}?random=${randomNum}`;
}
