import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";

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

export async function validToken(req, res, next){
    console.log("Middleware token.")
    try{
        const token = await jwt.verify(req.query.token, "123456")
        req.userJWT = token;

        next()
    } catch(err){
        res.status(500).json({error: err})
    }
}