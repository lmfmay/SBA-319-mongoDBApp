import mongoose from "mongoose";

const requestedProjectsSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    })

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
        type: [requestedProjectsSchema]
    }
})

export default mongoose.model('Client',clientSchema)