import { userModel } from "../models/user.model.js";

export async function userExists(req, res, next){
    try {
        const { email } = req.body;
        const user = await userModel.findOne({ email });
        if (user == null) return res.status(401).json({ error: "El usuario no existe" });
        req.user = user;
        next();
    } catch(err) {
        next(err);
    }
}