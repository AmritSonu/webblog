import useBlog from "../contexts/useBlog";

// Short the Paragraph in frontPage...
const truncateContent = (content, maxLength = 200) => {
  if (content.length > maxLength) {
    return content.substring(0, maxLength) + "...";
  }
  return content;
};
// Extract the date Content with readable encoding....
function formatMongoDBDate(mongoDBDateString) {
  const dateObj = new Date(mongoDBDateString);

  // Extract components
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // Months are zero-based (0 = January)
  const day = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const period = hours >= 12 ? "PM" : "AM"; // Determine AM or PM

  // Convert 24-hour format to 12-hour format
  const formattedHours = hours % 12 || 12; // 0 should be converted to 12 for 12-hour format
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero if minutes < 10

  // Construct and return the formatted date string
  return `${year}/${month}/${day} : ${formattedHours}:${formattedMinutes} ${period}`;
}

export function BlogBox() {
  const { blogContent } = useBlog();

  return (
    <div>
      {blogContent.map((eachblogContent) => (
        <div key={eachblogContent._id}>
          <div className="flex justify-center items-center font-semibold gap-5 bg-white m-1 hover:cursor-pointer relative ">
            <span className="absolute top-0 right-0 bg-mainColor-400 text-white p-1  font-thin">
              {eachblogContent.category}
            </span>
            <div className="w-2/6">
              <img
                className="object-cover border-xl"
                src="https://source.unsplash.com/random/?Frontend/"
                alt="blog_pic"
              />
            </div>
            <div>
              <h1 className="text-sm">{eachblogContent.title}</h1>
              <div>
                <span className="text-sm">
                  {formatMongoDBDate(eachblogContent.date)}
                </span>
                <p className="text-sm">
                  {eachblogContent.allComments.length === 0
                    ? "No"
                    : eachblogContent.allComments.length}{" "}
                  <span>comments</span>
                </p>
                <p className="text-sm font-light">
                  {truncateContent(eachblogContent.content)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
