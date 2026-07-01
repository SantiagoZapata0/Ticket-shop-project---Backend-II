import { ticketDao } from "../dao/ticket.dao.js";

export class TicketRepository{
    async getAllTickets(){
        return await ticketDao.getAll();
    }

    async createTicket(ticketData){
        return await ticketDao.createTicket(ticketData);
    }
}

export const ticketRepository = new TicketRepository();