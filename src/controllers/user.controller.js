import { userModel } from "../models/user.model.js"

export async function getAllUsers(req, res, next){
    try{
        const users = await userModel.find();
        return res.status(200).json({status: "Success", payload: users});
    } catch(err){
        return res.status(500).json({ message: err.message });
    }
}