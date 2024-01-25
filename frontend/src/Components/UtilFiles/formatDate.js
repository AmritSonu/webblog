export function formatMongoDate(mongoDate) {
  // Assuming mongoDate is a string or a Date object
  const date = new Date(mongoDate);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true, // Use 12-hour clock format
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}
