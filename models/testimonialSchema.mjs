import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    testimonial: {
        type:String,
        required:true
    }
})

//testimonials generally have a higher write-to-read ratio, hence doesn't really require an index.

export default mongoose.model('Testimonial',testimonialSchema)