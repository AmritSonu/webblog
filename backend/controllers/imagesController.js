import { uploadToCloudinary } from "../Fileupload/cloudinaryConfig.js";
import { User } from "../models/userModel.js";

const uploadAvtar = async (req, res) => {
  try {
    const { userId } = req.params;
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const imageData = await uploadToCloudinary(req.file.path, "avtar");
    // Set the avatar URL in the user model
    user.avtarUrl = imageData.url;
    // Update the user in the database
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
export { uploadAvtar };
