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
        // Check if req.user exists and has an id
        if (!req.user || !req.user.id) {
            return res
                .status(401)
                .json({ message: "Unauthorized: User not authenticated" });
        }

        // Ensure required fields are provided in the request body
        if (
            !name ||
            !description ||
            !techUsed ||
            !assignedTo ||
            !thumbnail ||
            !codeLink ||
            !liveDemoLink
        ) {
            return res
                .status(400)
                .json({ message: "All required fields must be filled" });
        }

        // Create new project
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
            createdBy: req.user.id, // Make sure req.user.id exists
        });

        // Save the project to the database
        await project.save();

        // Respond with the created project
        res.status(201).json(project);
    } catch (error) {
        console.error("Project creation error: ", error); // Log the error for debugging
        res.status(400).json({ error: error.message });
    }
};

// Update a project
export const updateProject = async (req, res) => {
    const { id } = req.params;
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
        const project = await Project.findByIdAndUpdate(
            id,
            {
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
            },
            { new: true }
        );
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a project
export const deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Project.findByIdAndDelete(id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
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
