import { userModel } from "../models/user.model.js"
import { createHash, isValidPassword } from "../utils/utils.js"
import { env } from "../config/env.js"
import { registerUser } from "../services/user.service.js";
import jwt from "jsonwebtoken";

export async function register(req, res, next){
    try{
        const newUser = await registerUser(req.body);
        
        return res.status(201).json({status: "Success", message: "Usuario registrado correctamente.", payload: newUser})
    } catch(err){
        return res.status(err.status || 500).json({status: "Failed", payload: err.message})
    }
}

export async function login(req, res, next){
    try{
        const { user } = req
        const { password } = req.body;
            
        if(await isValidPassword(password, user.password)){
             const sessionData = {
                email: user.email,
                role: user.role
            }

            const token = jwt.sign(sessionData, env.JWT_SECRET, {expiresIn: env.EXPIRES_IN})

            res.status(200).json(token)
        } else{
            res.status(401).json({status: "Failed", payload: "Credenciales invalidas."})
        }
    
    } catch(err){
        return res.status(500).json({ message: err.message });
    }
}

export async function current(req, res, next){
    console.log("Controller current")
    try{
        res.status(200).json({data: req.userJWT})
        
    } catch(err){
        res.status(500).json({error: err})
    }
}