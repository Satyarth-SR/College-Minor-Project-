import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import { connectDB } from './database/db.js';
import cors from "cors";

const app = express();
dotenv.config();

connectDB();

app.use(cors({
    origin: "http://127.0.0.1:5500"
}));

app.use(express.json());
app.use("/api",authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("EncryptX server is running");
}); 

