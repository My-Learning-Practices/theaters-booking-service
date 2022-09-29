const movie = require("./schemas/movie");
const show = require("./schemas/show");
const theater = require("./schemas/theater");
const ticket = require("./schemas/ticket");

const findMovies = async (searchString: string) => {
  try {
    const movieList = await movie.find({ movieName: searchString });
    console.log(movieList);
  } catch (error) {
    console.log(error);
  }
};

const addShow = async (showDetails: any) => {
  try {
    const newShow = await show.create(showDetails);
    console.log(newShow);
  } catch (error) {
    console.log(error);
  }
};

const addtheater = async (theaterDetails: any) => {
  try {
    const newTheater = await theater.create(theaterDetails);
    console.log(newTheater);
  } catch (error) {
    console.log(error);
  }
};

const findTheaters = async (searchString: any) => {
  try {
    const theaters = await theater.find({ location: searchString });
    console.log(theaters);
  } catch (error) {
    console.log(error);
  }
};

const bookTicket = async (ticketDeatils: any) => {
  try {
    const newTicket = await ticket.create(ticketDeatils);
    console.log(newTicket);
  } catch (error) {
    console.log(error);
  }
};

const rescheduleTicket = async (ticketDeatils: any, id: string) => {
  try {
    const updatedTicket = await ticket.replaceOne({ id: id }, ticketDeatils);
    console.log(updatedTicket);
  } catch (error) {
    console.log(error);
  }
};

const find = async (searchString: any, searchIn: any) => {
  if (searchIn === "Movies") return await findMovies(searchString);
  else if (searchIn === "Theaters") return await findTheaters(searchString);
  else return "Wrong Category selected";
};

export default {
  addShow,
  addtheater,
  bookTicket,
  rescheduleTicket,
  find,
};
