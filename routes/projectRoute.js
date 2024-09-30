import express from "express";
import {
    createProject,
    getAllProject,
} from "../controller/project.controller.js";

const router = express.Router();

router.route("/").post(createProject).get(getAllProject);

export default router;
