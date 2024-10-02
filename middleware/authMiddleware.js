export const isAuthenticated = (req, res, next) => {
    // Logic to authenticate user (JWT, session, etc.)
    // Populate req.user with user data
    console.log("isAuthenticated...");
    // call next middleware
    next();
};

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        return next();
    }
    res.status(403).json({ message: "access denied" });
};
