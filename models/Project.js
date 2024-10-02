import mongoose, { Schema, model } from "mongoose";

// Schema definition
const projectSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Project name is required"],
            trim: true,
            minlength: [3, "Project name must be at least 3 characters long"],
            maxlength: [100, "Project name cannot exceed 100 characters"],
        },
        description: {
            type: String,
            required: [true, "Project description is required"],
            minlength: [10, "Description must be at least 10 characters long"],
        },
        difficulty: {
            type: String,
            enum: ["Easy", "Medium", "Hard"],
            required: [true, "Please specify the project difficulty"],
            default: "Medium",
        },
        techUsed: {
            type: [String],
            required: [true, "At least one technology must be specified"],
            validate: {
                validator: (value) => value.length > 0,
                message:
                    "There must be at least one technology used in the project",
            },
        },
        estimatedTime: {
            type: String,
            required: [true, "Estimated time is required"],
            match: [
                /^\d+\s(hours?|days?)$/,
                'Estimated time should be in the format of "x hours" or "x days"',
            ],
        },
        status: {
            type: String,
            enum: ["Not Started", "In Progress", "Completed"],
            required: [true, "Project status is required"],
            default: "Not Started",
        },
        startDate: {
            type: Date,
            required: [true, "Start date is required"],
        },
        endDate: {
            type: Date,
            required: [true, "End date is required"],
        },
        assignedTo: {
            type: String,
            required: [true, "Assigned person or team is required"],
            trim: true,
        },
        thumbnail: {
            type: String,
            required: [true, "Thumbnail URL is required"],
            match: [
                /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/,
                "Thumbnail must be a valid image URL",
            ],
        },
        codeLink: {
            type: String,
            required: [true, "Code repository link is required"],
            match: [
                /^https?:\/\/(www\.)?github\.com\/.+/,
                "Code link must be a valid GitHub URL",
            ],
        },
        liveDemoLink: {
            type: String,
            required: [true, "Live demo link is required"],
            match: [/^https?:\/\/.+/, "Live demo link must be a valid URL"],
        },
        contributors: {
            type: [String],
            required: [true, "At least one contributor is required"],
            validate: {
                validator: (value) => value.length > 0,
                message:
                    "There must be at least one contributor for the project",
            },
        },
        tags: {
            type: [String],
            required: [true, "At least one tag is required"],
            validate: {
                validator: (value) => value.length > 0,
                message: "There must be at least one tag for the project",
            },
        },
    },
    { timestamps: true }
);

// Model
const Project = mongoose.model("Project", projectSchema);

export default Project;
