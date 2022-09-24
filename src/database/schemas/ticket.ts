import mongooes from "../connection";

export const ticket = new mongooes.Schema({
  theater: String, // Theater _id
  show: String, // Show _id
});

module.exports = mongooes.model("Ticket", ticket);
