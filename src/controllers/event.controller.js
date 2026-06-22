import { eventModel } from "../models/event.model.js";

export async function getAll(req, res, next){
    try{
        const events = await eventModel.find();
        return res.status(200).json(events);    
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export async function getById(req, res, next) {
    try {
        const event = await eventModel.findById(req.params.id);
        return res.status(200).json(event);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}