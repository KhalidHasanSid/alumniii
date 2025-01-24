import mongoose,{Schema} from "mongoose";

const alumniSchema =new Schema({

    name:{ type:String,
         required:true,
        unique:true,
        lowercase:true,
        trim:true },
    email:{
        type:String,
         required:true,
        unique:true,
        lowercase:true,
        trim:true 
    },
    contact:{
        type:String,
         required:true,
        lowercase:true,
        trim:true 
    },
    studentID:{
        type:String,
         required:true,
        unique:true,
        lowercase:true,
        trim:true

    },
    designation:{
        type:String,
         required:true,
        lowercase:true,
        trim:true 

    },
    organization:{
        type:String,
         required:true,
        lowercase:true,
        trim:true
    },
    role:{
        type:String,
         required:true,
        lowercase:true,
        trim:true
    }
},{timestamps:true})


const Alumni=mongoose.model("Alumni",alumniSchema)



export {Alumni}