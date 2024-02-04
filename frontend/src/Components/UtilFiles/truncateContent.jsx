import PropTypes from "prop-types";
import { convert } from "html-to-text";
import { truncateContentBox } from "./truncateContentBox";

export const TruncateAndParseContent = ({ content, maxLength }) => {
  const truncatedContent = truncateContentBox(content, maxLength);

  return <span>{convert(truncatedContent)}</span>;
};
TruncateAndParseContent.propTypes = {
  content: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};
