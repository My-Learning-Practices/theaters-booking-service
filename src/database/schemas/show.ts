import mongooes from "../connection";

export const show = new mongooes.Schema({
  showTimings: String,
  date: String,
  movies: [
    // Array of movies _id
    {
      type: String,
    },
  ],
});

module.exports = mongooes.model("Show", show);
