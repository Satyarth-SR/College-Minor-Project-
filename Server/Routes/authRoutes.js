import express from 'express';
import { registerUser } from '../controller/authController.js';

const router = express.Router();


router.post("/register",registerUser);
// router.post("/fetch");
// router.put("/fetch");
// router.delete("/fetch");

export default router;