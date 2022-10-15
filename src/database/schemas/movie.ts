import mongooes from "../connection";

export const movie = new mongooes.Schema({
  movieName: String,
});

module.exports = mongooes.model("Movie", movie);