const theater = require("../../database/schemas/theater");

const findTheaters = async (searchString: any) => {
  try {
    return await theater.find({ location: searchString });
  } catch (error) {
    console.log(error);
  }
};

export default findTheaters;
