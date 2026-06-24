import { Schema, model } from "mongoose";

const userCollection = "users";

const userSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [ /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "El formato de email no es valido."]
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
})

export const userModel = model(userCollection, userSchema);