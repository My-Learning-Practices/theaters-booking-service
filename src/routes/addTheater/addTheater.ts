import { RequestHandler, Request, Response } from "express";

const theater = require("../../database/schemas/theater");

export const addTheater: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const theaterDetails = req.body?.theaterDetails;

  try {
    const newTheater = await theater.create(theaterDetails);
    console.log(newTheater);
  } catch (error) {
    console.log(error);
  }
};
