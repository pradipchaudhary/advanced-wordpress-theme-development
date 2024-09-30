import mongoose, { Schema, model } from "mongoose";

// Schema definition
const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        required: true,
    },
    tech_used: {
        type: [String],
        required: true,
    },
    estimated_time: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

// Model
const Project = mongoose.model("Project", projectSchema);

export default Project;
