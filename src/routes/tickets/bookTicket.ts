import { RequestHandler, Request, Response } from "express";

const ticket = require("../../database/schemas/ticket");

const bookTicket: RequestHandler = async (req: Request, res: Response) => {
    const ticketDetails = req.body?.ticketDetails;

    try {
        const newTicket = await ticket.create(ticketDetails);
        console.log(newTicket);
    } catch (error) {
        console.log(error);
    }
};

export default bookTicket;
