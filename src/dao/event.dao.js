import { Common } from "./common.dao.js";
import { eventModel } from "../models/event.model.js"

export class EventDao extends Common{
    constructor(){
        super(eventModel)
    }

    async createEvent(eventData){
        try{
            const result = await this.model.create(eventData)
            return result
        } catch(err){
            throw err
        }
    }

    async getEventById(id){
        try{
            const result = await this.model.findById(id)
            return result
        } catch(err){
            throw err
        }
    }

    async getEventByTitle(title){
        try{
            const result = await this.model.findOne({title})
            return result
        } catch(err){
            throw err
        }
    }
}

export const eventDao = new EventDao();