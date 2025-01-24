import dotenv from "dotenv"

dotenv.config({path:"./.env"})
import connectDB from "./db/db.js"



import { app } from "./app.js";


 connectDB().then(()=>{
    app.listen( process.env.PORT||9000,()=>{
         console.log(`port is listening at `,process.env.PORT)
    })
 })
 .catch((err)=>{
    console.log("error occur while connecting to",err)
 })