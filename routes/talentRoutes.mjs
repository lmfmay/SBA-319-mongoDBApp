import express from 'express'
import talentController from '../controllers/talentController.mjs'

const router = express.Router()

router.route('/')
//create

//read
    .get(talentController.getTalents)
//update

//delete

export default router