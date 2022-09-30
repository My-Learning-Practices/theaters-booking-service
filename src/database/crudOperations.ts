const movie = require("./schemas/movie");
const theater = require("./schemas/theater");

const findMovies = async (searchString: string) => {
  try {
    const movieList = await movie.find({ movieName: searchString });
    console.log(movieList);
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

const find = async (searchString: any, searchIn: any) => {
  if (searchIn === "Movies") return await findMovies(searchString);
  else if (searchIn === "Theaters") return await findTheaters(searchString);
  else return "Wrong Category selected";
};

export default {
  find,
};
