import Project from "../models/Project.js";

// Create project
export const createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);

        res.status(201).json({ data: project });
    } catch (error) {
        res.status(400).json({ "Error: ": error.message });
    }
};

// Get all projects

export const getAllProject = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(400).json({ "Error: ": error.message });
    }
};

// get specific project

export const getSpecificProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).send("Project not found");
        }
        res.json(project);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
};
