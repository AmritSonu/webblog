import express from "express";
import { userRouters } from "./Routes/userRouters.js";
import { blogPostRouter } from "./Routes/blogPostRoutes.js";
import { commentRouters } from "./Routes/commentRoutes.js";
import { connectDB } from "./db.js";
import dotenv from "dotenv";
import { auth } from "./controllers/auth.js";
dotenv.config();
const PORT = process.env.PORT || 3000;

// INITIALIZATION EXPRESS
const app = express();

// PARSE JSON() DATA FOR REQUEST BODY
app.use(express.json());

// ROUTE MOUNTING
app.use("/blogposts", blogPostRouter); // Use blogPostRouter for /blogposts path
app.use("/blogposts/users", userRouters); // Use userRouter for /users path
app.use("/blogposts/comments", commentRouters);

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.json({ message: "You are authorized to access me" });
});
// CONNECT TO DATABASE
connectDB();


// // Curb Cores Error by adding a header here
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });
// RUN SERVER
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
