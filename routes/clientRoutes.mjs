import express from 'express'
import clientController from '../controllers/clientController.mjs'

const router = express.Router()

router.route('/')
//create
    .post(clientController.addClient)
//read
    .get(clientController.getClients)

router.route('/:id')
//update
    .put(clientController.updateClientDetails)
//delete
    .delete(clientController.deleteClient)
    
export default router