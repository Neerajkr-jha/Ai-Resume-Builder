import express from "express"
import cors from "cors";
import "dotenv/config";
import connectDb from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRouter.js";
//import { connect } from "mongoose";


const app=express();
const PORT=process.env.PORT || 3000;

//database connnection 
// await connectDb()

//middleware
app.use(express.json())
app.use(cors())

let isConnected=false;

async function connectOnce() {
    if(!isConnected){
        await connectDb();
        isConnected=true
        console.log("Databse connected")
    }
}

app.use(async(req,res,next)=>{
    await connectOnce();
    next();
})

app.get("/",(req,res)=>res.send("Server is Live..."));
app.use("/api/users", userRouter)
app.use("/api/resumes",resumeRouter)
app.use("/api/ai",aiRouter)

app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`);
})

export default app