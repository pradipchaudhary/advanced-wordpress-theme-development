import express from "express";
import {
    createProject,
    deleteProject,
    getAllProject,
    getSpecificProject,
    updateProject,
} from "../controller/projectController.js";
import { isAuthenticated, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", isAuthenticated, isAdmin, createProject);
router.put("/:id", isAuthenticated, isAdmin, updateProject);
router.delete("/:id", isAuthenticated, isAdmin, deleteProject);
router.get("/:id", getSpecificProject);
router.get("/", getAllProject);

export default router;
