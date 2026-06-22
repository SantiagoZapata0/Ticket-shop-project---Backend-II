import { Schema, model } from "mongoose";

const healthCollection = "health";

const healthSchema = new Schema({
    info:{
        type: required
    }
})

export const healthModel = model(healthCollection, healthSchema);