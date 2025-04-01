import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import postRoutes from "./routes/posts.js";


const app = express();

//frst use the url /posts and then access the / within it


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
const startServer = async () => {
    try {
        await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        app.listen(PORT, () => console.log(`✅ Server running on Port: ${PORT}`));
        console.log("✅ MongoDB connection successful")
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
    }
};

startServer();