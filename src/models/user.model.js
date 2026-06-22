import { Schema, model } from "mongoose";

const userCollection = "users";

const userSchema = new Schema({

    email:{
        type: String,
        required: true,
        unique: true
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