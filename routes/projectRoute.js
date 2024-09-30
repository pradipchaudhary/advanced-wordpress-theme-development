import express from "express";
import {
    createProject,
    getAllProject,
    getSpecificProject,
} from "../controller/project.controller.js";

const router = express.Router();

router.route("/").post(createProject).get(getAllProject);
router.get("/:id", getSpecificProject);

export default router;
