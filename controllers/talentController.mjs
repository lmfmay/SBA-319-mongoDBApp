import { error } from "../utilities/error.mjs";
import Talent from '../models/talentSchema.mjs'

//Get list of all talents in DB
async function getTalents(req,res){
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

export default {getTalents}