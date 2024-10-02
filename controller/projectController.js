import Project from "../models/Project.js";

// Create project
export const createProject = async (req, res) => {
    const {
        name,
        description,
        difficulty,
        techUsed,
        estimatedTime,
        status,
        startDate,
        endDate,
        assignedTo,
        thumbnail,
        codeLink,
        liveDemoLink,
        contributors,
        tags,
    } = req.body;
    try {
        const project = new Project({
            name,
            description,
            difficulty,
            techUsed,
            estimatedTime,
            status,
            startDate,
            endDate,
            assignedTo,
            thumbnail,
            codeLink,
            liveDemoLink,
            contributors,
            tags,
            createdBy: req.user._id, // Assuming req.user is populated with the authenticated user's data
        });
        console.log(project);
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ "Error: ": error.message });
    }
};

// Update a project
export const updateProject = (req, res) => {
    console.log("Update Projects...");
};
// Delete a project
export const deleteProject = (req, res) => {
    console.log("Delete project...");
};
// Get all projects
export const getAllProject = async (req, res) => {
    try {
        const projects = await Project.find().populate(
            "createdBy",
            "username email"
        );
        res.json(projects);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// get specific project

export const getSpecificProject = async (req, res) => {
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
};
