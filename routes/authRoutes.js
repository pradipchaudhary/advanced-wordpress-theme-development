import { Router } from "express";
import { registerAdmin } from "../controller/authController.js";

const router = Router();

router.post("/register", registerAdmin);

export default router;
