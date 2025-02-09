import mongoose from "mongoose";

const spotifyDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDb connected succesfully");
  } catch (error) {
    console.error("Error connecting to mongoDb: ", error.message);
    process.exit(1);
  }
};

export default spotifyDB;
