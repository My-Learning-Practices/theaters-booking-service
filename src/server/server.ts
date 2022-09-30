import express from "express";
import CRUD from "../database/crudOperations";
import { config } from "dotenv";
import bodyParser from "body-parser";
import router from "../routes/index";

/*
  BASIC SETUP
*/
config();
const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`Server started at port ${PORT}`);
});

/*
  ROUTES BEGINS HERE

*/

app.use("/", router);

app.get("/search", async (req, res) => {
  const searchString = req.query?.searchString;
  const searchIn = req.query?.searchIn;

  try {
    res.send(await CRUD.find(searchString, searchIn));
  } catch (error) {}
});

export default app;
