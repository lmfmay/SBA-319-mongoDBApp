import { error } from "../utilities/error.mjs";
import Client from "../models/clientSchema.mjs";

//Get list of all clients in DB
async function getClients(req,res,next){
    try {
        //specify action
        let allClients = await Client.find({});
        //return results
        res.json(allClients);
    } catch (err) {
       console.error(err);
       next(error(500, 'Server Error'))
       //res.status(500).json({msg:'Server error'})
    }
}

//Add client to DB
async function addClient(req,res,next){
    try {
        //specify action
        let newClient = new Client(req.body)
        await newClient.save();
        //return results
        res.json(newClient);
    } catch (err) {
       console.error(err);
       next(error(500, 'Server Error'))
    }
}

//Update client in DB
async function updateClientDetails(req,res,next){
    try {
        //specify action
        let updatedClient = await Client.findByIdAndUpdate(req.params.id,req.body,{new:true});
        //return results
        res.json(updatedClient);
    } catch (err) {
       console.error(err);
       next(error(500, 'Server Error'))
    }
}

//Delete client in DB
async function deleteClient(req,res,next){
    try {
        //specify action
        let deletedClient = await Client.findByIdAndDelete(req.params.id);
        //return results
        res.json(deletedClient);
    } catch (err) {
       console.error(err);
       next(error(500, 'Server Error'))
    }
}


export default {getClients, addClient, updateClientDetails, deleteClient}