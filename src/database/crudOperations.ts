const movie = require("./schemas/movie");
const show = require("./schemas/show");
const theater = require("./schemas/theater");
const ticket = require("./schemas/ticket");

const addMovie = async (movieDetails: any) => {
  try {
    const newMovie = await movie.create(movieDetails);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
};

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
    const newTheater = await theater.find({ location: searchString });
    console.log(newTheater);
  } catch (error) {
    console.log(error);
  }
};

const bookTicket = async (ticketDeatils: any) => {
  try {
    const newTheater = await ticket.create(ticketDeatils);
    console.log(newTheater);
  } catch (error) {
    console.log(error);
  }
};

const rescheduleTicket = async (ticketDeatils: any, id: string) => {
  try {
    const newTheater = await ticket.replaceOne({ _id: id }, ticketDeatils);
    console.log(newTheater);
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
  addMovie,
  addtheater,
  bookTicket,
  rescheduleTicket,
  find,
};
