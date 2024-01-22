import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});
const uploadToCloudinary = async (path, folder) => {
  return cloudinary.uploader
    .upload(path, {
      folder,
    })
    .then((data) => {
      return { url: data.url, public_id: data.public_id };
    })
    .catch((err) => {
      console.log(err.message);
    });
};
const removeFromCloudinary = async (public_id) => {
  await cloudinary.uploader.destroy(public_id, function (err, res) {
    console.log(res, err);
  });
};
export { uploadToCloudinary, removeFromCloudinary };