import User from "../models/user.js";

import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
        try {
                const { fullName, email, password, confirmPassword } = req.body;

                if (
                        typeof fullName !== "string" ||
                        typeof email !== "string" ||
                        typeof password !== "string" ||
                        typeof confirmPassword !== "string" ||
                        !fullName.trim() ||
                        !email.trim() ||
                        !password ||
                        !confirmPassword
                ) {
                        return res.status(400).json({
                                success: false,
                                message: "All fields are required"
                        });
                }

                const cleanName = fullName.trim();
                const cleanEmail = email.trim().toLowerCase();

                if (cleanName.length < 3 || cleanName.length > 20) {
                        return res.status(400).json({
                                success: false,
                                message: "Full name must be between 3 to 20 characters"
                        });
                }

                // by chat gpt for basic email format
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(cleanEmail)) {
                        return res.status(400).json({
                                success: false,
                                message: "Please enter a valid email address"
                        });
                }

                if (password.length < 8 || Buffer.byteLength(password, "utf8") > 72) {
                        return res.status(400).json({
                                success: false,
                                message: "Password must be at least 8 characters and at most 72 UTF-8 bytes"
                        });
                }

                if (password !== confirmPassword) {
                        return res.status(400).json({
                                success: false,
                                message: "Password and Confirm password does not match"
                        });
                }

                const existingUser = await User.findOne({
                        email: cleanEmail
                });

                if (existingUser) {
                        return res.status(409).json({
                                success: false,
                                message: "An account with this email already exists"
                        });
                }

                const hashedPassword = await bcrypt.hash(password, 10);

                const newUser = await User.create({
                        fullName: cleanName,
                        email: cleanEmail,
                        password: hashedPassword
                });

                return res.status(201).json({
                        success: true,
                        message: "Account Created Successfully",
                });

        } catch (error) {
                if(error.code === 11000) {
                        return res.status(409).json({
                                success: false,
                                message: "An account with this email already exists"
                        });
                }

                console.error("Registration error:",error);

                return res.status(500).json({
                        success: false,
                        message: "Internal server error"
                });
        }
}


