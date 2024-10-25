import express from 'express'
import testimonialController from '../controllers/testimonialController.mjs'

const router = express.Router()

router.route('/')
//create
    .post(testimonialController.addTestimonial)
//read
    .get(testimonialController.getTestimonials)

router.route('/:id')
//update
    .put(testimonialController.updateTestimonialDetails)
//delete
    .delete(testimonialController.deleteTestimonial)
    
export default router