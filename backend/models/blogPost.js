// The BlogPost model represents individual blog posts created by users.
// Each blog post has a title, content, author (user who created the post), date,
// and comments associated with it.
import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  allComments: [
    {
      comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const BlogPost = mongoose.model("BlogPost", blogSchema);

export { BlogPost };
