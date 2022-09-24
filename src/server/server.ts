import express from "express";
import CRUD from "../database/crudOperations";

require("dotenv").config();
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`Server started at port ${PORT}`);
});

/*
  ROUTES BEGINS HERE

*/

app.post("/addMovie", async (req, res) => {
  const movieDetails = req.body?.movieDetails;

  try {
    res.send(await CRUD.addMovie(movieDetails));
  } catch (error) {
    res.status(501).end();
  }
});

app.post("/addShow", async (req, res) => {
  const showDetails = req.body?.showDetails;

  try {
    res.send(await CRUD.addShow(showDetails));
  } catch (error) {
    res.status(501).end();
  }
});

app.post("/addTheater", async (req, res) => {
  const theaterDetails = req.body?.theaterDetails;

  try {
    res.send(await CRUD.addtheater(theaterDetails));
  } catch (error) {
    res.status(501).end();
  }
});

app.post("/bookTicket", async (req, res) => {
  const ticketDetails = req.body?.ticketDetails;

  try {
    res.send(await CRUD.bookTicket(ticketDetails));
  } catch (error) {
    res.status(501).end();
  }
});

app.post("/rescheduleTicket", async (req, res) => {
  const ticketDetails = req.body?.ticketDetails;
  const id = req.body?.id;
  try {
    res.send(await CRUD.rescheduleTicket(ticketDetails, id));
  } catch (error) {
    res.status(501).end();
  }
});

app.get("/search", async (req, res) => {
  const searchString = req.query?.searchString;
  const searchIn = req.query?.searchIn;

  try {
    res.send(await CRUD.find(searchString, searchIn));
  } catch (error) {}
});

export default app;
