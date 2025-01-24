import mongoose from "mongoose";


const connectDB= async ()=>{

    try{
        const connectionInstanse =await mongoose.connect("mongodb+srv://khalid:khalid123@cluster0.drpqz.mongodb.net/Alumni")
        console.log("DATABASE IS CONNECTERD ",connectionInstanse.connection.host)
    }
    catch(error){
        console.error("NOT Connected to the database",error)

    }

   

}
export default connectDB;
