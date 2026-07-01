import { ticketRepository } from "../repositories/ticket.repository.js";
import { userRepository } from "../repositories/user.repository.js";
import { eventRepository } from "../repositories/event.repository.js"

export async function getAllTickets(){
    const tickets = await ticketRepository.getAllTickets()
    return tickets.map(tick => ({
        id: tick._id,
        user: tick.user,
        event: tick.event
    }))
}

export async function createTicket({user, event}){

    if(!event || !event){
        const error = new Error ("Los campos user y event son obligatorios.")
        error.status = 400;
        throw error
    }

    const existingUser = await userRepository.getUserById(user);
    if(!existingUser){
        const error = new Error("El usuario indicado no existe.")
        error.status = 404;
        throw error
    }

    const existingEvent = await eventRepository.getEventById(event)
    if(!existingEvent){
        const error = new Error("El evento indicado no existe.")
        error.status = 404;
        throw error
    }

    const newTicket = await ticketRepository.createTicket({user, event})

    return{
        id: newTicket._id,
        user: newTicket.user,
        event: newTicket.event
    }
}