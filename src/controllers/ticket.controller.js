import { ticketModel } from "../models/ticket.model.js"

export async function getAllTickets(req, res, next){
    try{
        const tickets = await ticketModel.find();
        return res.status(200).json({status: "Success", payload: tickets})
    } catch(err){
        return res.status(500).json({ message: err.message });
    }
}