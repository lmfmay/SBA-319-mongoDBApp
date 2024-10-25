import { error } from "../utilities/error.mjs";
import Talent from '../models/talentSchema.mjs'

//Get list of all talents in DB
async function getTalents(req,res,next){
    try {
        //specify action
        let allTalents = await Talent.find({});
        //return results
        res.json(allTalents);
    } catch (err) {
       console.error(err);
       next(error(500, 'Server Error'))
       //res.status(500).json({msg:'Server error'})
    }
}

//Add talent to DB
async function addTalent(req,res,next){
    try {
        //specify action
        let newTalent = new Talent(req.body)
        await newTalent.save();
        //return results
        res.json(newTalent);
    } catch (err) {
       console.error(err);
       next(error(500, 'Server Error'))
    }
}

//Update talent in DB
async function updateTalentDetails(req,res,next){
    try {
        //specify action
        let updatedTalent = await Talent.findByIdAndUpdate(req.params.id,req.body,{new:true});
        //return results
        res.json(updatedTalent);
    } catch (err) {
       console.error(err);
       next(error(500, 'Server Error'))
    }
}

//Update talent in DB
async function deleteTalent(req,res,next){
    try {
        //specify action
        let deletedTalent = await Talent.findByIdAndDelete(req.params.id);
        //return results
        res.json(deletedTalent);
    } catch (err) {
       console.error(err);
       next(error(500, 'Server Error'))
    }
}


export default {getTalents, addTalent, updateTalentDetails, deleteTalent}