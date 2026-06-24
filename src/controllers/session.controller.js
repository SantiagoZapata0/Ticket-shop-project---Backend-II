import { userModel } from "../models/user.model.js"
import { createHash, isValidPassword } from "../utils/utils.js"

export async function register(req, res, next){
    try{
        const { email, password } = req.body
        const hashedPassword = await createHash(password);
        const newUser = await userModel.create({email, password: hashedPassword});

        res.status(201).json({newUser})
    } catch(err){
        if(err.code == 11000){
            res.status(409).json({error: "El usuario ya existe."})
        }
    }
}

export async function login(req, res, next){
    try{
        const { email, password } = req.body;
        const user = await userModel.findOne({email})

        if(user == null) throw new Error("El usuario no existe.")
            
        if(await isValidPassword(password, user.password)){
             const sessionData = {
                email: user.email,
                role: user.role
            }
            res.status(200).json({sessionData})
        } else{
            res.status(401).json({status: "Failed", payload: "Credenciales invalidas."})
        }
    
    } catch(err){
        return res.status(500).json({ message: err.message });
    }
}