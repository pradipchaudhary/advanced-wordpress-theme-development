import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoute from "./routes/projectRoute.js";

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

app.get("/api/project/:id", async (req, res) => {
    try {
        // Extract project ID from request parameters
        const projectId = req.params.id;

        // Find project by ID in MongoDB
        const project = await Project.findById(projectId);

        // If project not found, return 404
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        // Send the project data as the response
        res.json(project);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
