import mongooes from "../connection";

export const theater = new mongooes.Schema({
  theaterName: String,
  location: String,
  shows: [
    // Array of shows _id
    {
      type: String,
    },
  ],
});

module.exports = mongooes.model("Theater", theater);
