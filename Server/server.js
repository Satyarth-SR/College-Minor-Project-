import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import { connectDB } from './database/db.js';
import cors from "cors";

const app = express();
dotenv.config();

connectDB();

app.use(cors({
    origin: "https://musical-goggles-97pw66w7rqww26p4-5501.app.github.dev/"
}));

app.use(express.json());
app.use("/api",authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("EncryptX server is running");
}); 

