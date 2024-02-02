import { uploadToCloudinary } from "../Fileupload/cloudinaryConfig.js";
import { BlogPost } from "../models/blogPost.js";
import { User } from "../models/userModel.js";

const uploadAvtar = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const imageData = await uploadToCloudinary(req.file.path, "avtar");
    user.avtarUrl = imageData.url;
    await user.save();
    const updatedUser = await user.save();
    res.json({
      status: 200,
      updatedUser,
    });
  } catch (uploadError) {
    return res.status(500).json({
      error: "Failed to upload image on Cloudinary",
      message: uploadError.message,
    });
  }
};

// const uploadHeroImage = async (req, res) => {
//   try {
//     const data = await uploadToCloudinary(req.file.path, "image");
//     const storeImg = await BlogPost.updateOne(
//       { _id: req.params.id },
//       {
//         $set: {
//           imageUrl: data.url,
//           publicId: data.public_id,
//         },
//       }
//     );
//     res.json({
//       status: "Index image uploaded with secces!",
//       data,
//     });
//   } catch (err) {
//     res.json({
//       status: "filed to upload image on cloudinary!",
//       message: err.message,
//     });
//   }
// };
export { uploadAvtar };