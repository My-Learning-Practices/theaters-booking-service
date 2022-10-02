import { RequestHandler, Request, Response } from "express";

const show = require("../../database/schemas/show");

export const addShow: RequestHandler = async (req: Request, res: Response) => {
  const showDetails = req?.body?.showDetails;

  try {
    const newShow = await show.create(showDetails);
    console.log(newShow);
  } catch (error) {
    console.log(error);
  }
};
