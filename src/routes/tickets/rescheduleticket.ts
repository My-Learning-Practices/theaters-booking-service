import { RequestHandler, Request, Response } from "express";

const ticket = require("../../database/schemas/ticket");

const rescheduleTicket: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const ticketDeatils = req.body?.ticketDetails;

  try {
    const updatedTicket = await ticket.replaceOne(
      { id: ticketDeatils.id },
      ticketDeatils
    );

    console.log(updatedTicket);
  } catch (error) {
    console.log(error);
  }
};

export default rescheduleTicket;
