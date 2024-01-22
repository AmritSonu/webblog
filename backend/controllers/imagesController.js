import { uploadToCloudinary } from "../Fileupload/cloudinaryConfig.js";
import { BlogPost } from "../models/blogPost.js";

const uploadIndexBlogImage = async (req, res) => {
  try {
    // Upload image to cloudinary
    const data = await uploadToCloudinary(req.file.path, "image");
    // Store image inside blogpost(database)...
    const storeImg = await BlogPost.updateOne(
      { _id: req.params.id },
      {
        $set: {
          imageUrl: data.url,
          publicId: data.public_id,
        },
      }
    );
    res.json({
      status: "user image uploaded with secces!",
      data,
    });
  } catch (err) {
    res.json({
      status: "filed to upload image on cloudinary!",
      message: err.message,
    });
  }
};
export { uploadIndexBlogImage };
