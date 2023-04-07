import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 5000;
const DB_URL = `mongodb+srv://nocap:nocap@cluster0.y4wst.mongodb.net/?retryWrites=true&w=majority` // cluster 0

const app = express();

app.use(express.json())

app.use("/api", router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("server started"));
    } catch (e) {
        console.log(e);
    }
}

startApp();