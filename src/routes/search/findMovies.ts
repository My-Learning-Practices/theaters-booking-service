const movie = require("../../database/schemas/movie");

const findMovies = async (searchString: any) => {
  try {
    return await movie.find({ movieName: { $regex: searchString } });
  } catch (error) {
    console.log(error);
  }
};

export default findMovies;
