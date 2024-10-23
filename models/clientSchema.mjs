import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    requestedProjects: {
        type:Number
    }
})

export default mongoose.model('Client',clientSchema)