import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerAdmin = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new admin user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role: "admin", // Setting role to admin
        });
        await newUser.save();
        res.status(201).json({ message: "Admin user registered successfully" });
        console.log(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
