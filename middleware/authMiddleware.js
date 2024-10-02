import { config } from "dotenv";
import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
    // Logic to authenticate user (JWT, session, etc.)
    // Populate req.user with user data

    // Get the token from the Authorization header
    const token = req.header("Authorization")?.split(" ")[1]; // Bearer <token>
    console.log(token);

    if (!token) {
        return res
            .status(401)
            .json({ message: "Access denied. No token provided." });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Make sure to define JWT_SECRET in your environment variables
        req.user = decoded; // Attach the decoded user info to the request
        next(); // Call the next middleware or route handler
    } catch (error) {
        return res.status(400).json({ message: "Invalid token." });
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        return next();
    }
    res.status(403).json({ message: "access denied" });
};
