import express from 'express'
import talentController from '../controllers/talentController.mjs'

const router = express.Router()

router.route('/')
//create
    .post(talentController.addTalent)
//read
    .get(talentController.getTalents)

router.route('/:id')
//update
    .put(talentController.updateTalentDetails)
//delete
    .delete(talentController.deleteTalent)
    
export default router