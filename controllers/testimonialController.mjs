import { error } from "../utilities/error.mjs";
import Testimonial from "../models/testimonialSchema.mjs";

//Get list of all testimonials in DB
async function getTestimonials(req,res,next){
    try {
        //specify action
        let allTestimonials = await Testimonial.find({});
        //return results
        res.json(allTestimonials);
    } catch (err) {
       console.error(err);
       next(error(500, 'Server Error'))
    }
}

//Add testimonial to DB
async function addTestimonial(req,res,next){
    try {
        //specify action
        let newTestimonial = new Testimonial(req.body)
        await newTestimonial.save();
        //return results
        res.json(newTestimonial);
    } catch (err) {
       console.error(err);
       next(error(500, 'Server Error'))
    }
}

//Update testimonial in DB
async function updateTestimonialDetails(req,res,next){
    try {
        //specify action
        let updatedTestimonial = await Testimonial.findByIdAndUpdate(req.params.id,req.body,{new:true});
        //return results
        res.json(updatedTestimonial);
    } catch (err) {
       console.error(err);
       next(error(500, 'Server Error'))
    }
}

//Delete testimonial in DB
async function deleteTestimonial(req,res,next){
    try {
        //specify action
        let deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);
        //return results
        res.json(deletedTestimonial);
    } catch (err) {
       console.error(err);
       next(error(500, 'Server Error'))
    }
}


export default {getTestimonials, addTestimonial, updateTestimonialDetails, deleteTestimonial}