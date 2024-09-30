import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoute from "./routes/projectRoute.js";
import Project from "./models/Project.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(json());
app.use(cors());

// Database connection
connectDB();

// Routes
app.use("/api/project", projectRoute);
app.get("/", (req, res) => {
    res.send("Home ");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
