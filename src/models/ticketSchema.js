import { Schema, Types, model } from "mongoose";

const ticketCollection = "tickets";

const ticketSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: "users"
    },
    event:{
        type: Types.ObjectId,
        ref: "events"
    }
})