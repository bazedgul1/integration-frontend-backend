import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import ApiError from "./utils/ApiError.js";
import connectDB from "./database/db.database.js";

dotenv.config();
const app = express();
connectDB();
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", taskRoutes);

// Error Handling
app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ success: false, message: err.message });
  }
  res.status(500).json({ success: false, message: "Server Error" });
});


const PORT = process.env.PORT| 6000;
console.log(PORT)
app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`)
})