import { config } from "dotenv";
import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
    // Logic to authenticate user (JWT, session, etc.)
    // Populate req.user with user data

    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return res
            .status(401)
            .json({ message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the user to the request object
        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        return next();
    }
    res.status(403).json({ message: "access denied" });
};
