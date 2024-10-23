import mongoose from "mongoose";

const completedProjectsSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    })

const talentSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    completedProjects: {
        type: [completedProjectsSchema]
    }
})

export default mongoose.model('Talent',talentSchema)