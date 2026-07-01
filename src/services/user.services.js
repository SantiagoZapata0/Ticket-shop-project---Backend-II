import { userRepository } from "../repositories/user.repository.js";
import { createHash } from "../utils/utils.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function registerUser({first_name, last_name, email, password}){

    if(!first_name || !last_name || !email || !password) {
        const error = new Error("Todos los campos son obligatorios");
        error.status = 400;
        throw error;
    }

    const normalizedEmail = email.trim().toLowerCase();

    if(!emailRegex.test(normalizedEmail)){
        const error = new Error("Formato de email invalido.");
        error.status = 400;
        throw error;
    }

    if(password.length < 6){
        const error = new Error("La contraseña debe contener al menos 6 caracteres.");
        error.status = 400;
        throw error;
    }

    const existingUser = await userRepository.getUserByEmail(normalizedEmail)

    if(existingUser){
        const error = new Error("El usuario ya existe");
        error.status = 409;
        throw error;
    }

    const hashedPassword = await createHash(password)
    const newUser = await userRepository.createUser({first_name, last_name, email: normalizedEmail, password: hashedPassword});

    return {
        id: newUser._id,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        role: newUser.role
    }
        
}