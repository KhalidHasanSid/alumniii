import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiErros.js";
import { Alumni } from "../models/Alumni.model.js";


const AlumniregisterController =asyncHandler(async(req,res ,next)=>{
    const  { name, email,contact,studentId,role,designation, organization} = req.body
    console.log(`${name},== ${email}== ${contact}== ${studentId}== ${role}`)
    // if (
    //     [name, email,contact,studentId,role,designation, organization].some((field) => field?.trim() === "")
    // ) {
    //     throw new apiError(400, "All fields are required")
    // }

    // const existedUser = await Alumni.findOne({studentID })
    
   

    // if (existedUser) {
    //     throw new apiError(409, "User with email or username already exists")
    // }

     const existingAlumni= await Alumni.find({studentID:studentId})

     if(existingAlumni.length>0){ throw new apiError(500,"Alumni already registered")
         console.log(existingAlumni)
    }
    

    const data ={
        name: name,
        email: email,
        contact : contact,
        studentID : studentId,
        designation : designation,
        organization : organization,
        role : role
    }

   
   



    const newAlumni=await Alumni.create( data)
    return res.status(201).json(
        new apiResponse(200, newAlumni, "User registered Successfully")
    )



})

const getAlumniDataController=asyncHandler(async(req,res ,next)=>{

    const data = await Alumni.find().lean();
    if (data.length === 0){
        throw new apiError(404, "No data found ")}

        console.log(data)


    return res.status(201).json(
        new apiResponse(200, data, "data found")
    )

    





})

export {AlumniregisterController,getAlumniDataController}