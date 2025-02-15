import mongoose, { mongo } from "mongoose";

let AlbumSchema = new mongoose.Schema({
  artist: {type: String, required: true},
  genre: {type: String, required: true},
  image: {type: String, required: true}
});

export let AlbumModel  = mongoose.model('albums', AlbumSchema);
