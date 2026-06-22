import { healthModel } from "../models/health.model.js"

export async function getHealthInfo(req, res, next){
    try{
        const healthInfo = await healthModel.find();
        return res.status(200).json({status: "Success", payload: healthInfo})
    } catch(err){
        return res.status(500).json({ message: err.message });
    }
}