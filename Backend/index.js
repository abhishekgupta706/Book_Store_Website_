import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database.js";
import cors from "cors";
import userRoutes from "./route/user.route.js"; 

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); 

connectDB();

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
