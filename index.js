import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Database connection
connectDB();

app.get("/", (req, res) => {
    res.send("Home ");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
