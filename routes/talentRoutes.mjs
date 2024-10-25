import express from 'express'
import talentController from '../controllers/talentController.mjs'

const router = express.Router()

router.route('/')
//create
    .post(talentController.addTalent)
//read
    .get(talentController.getTalents)
//update

//delete

export default router