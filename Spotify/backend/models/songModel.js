import mongoose from "mongoose";

let SongSchema = new mongoose.Schema({
    name: {type: String, required: true},
    youtubeId: {type: String, required: true},
    coverImage: {type: String, required: true},
    artist: {type: String, required: true}
})

export let SongModel = mongoose.model('songs', SongSchema);