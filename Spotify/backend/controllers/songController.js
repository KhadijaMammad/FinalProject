import { SongModel } from "../models/songModel.js";

export let SongController = {
    getAll: async (req, res) => {
        const songs = await SongModel.find();
        res.send(songs);
    },
    getById: async (req, res) => {
        let id = req.params.id;
        const song = await SongModel.findById(id);
        res.send(song);
    },
    postSong: async(req, res) =>{
        let newSong = new SongModel(req.body);
        await newSong.save();
        res.send(newSong);
    }, 
    deleteSong: async(req, res) => {
        let id = req.params.id;
        await SongModel.findByIdAndDelete(id);
        res.send("Song deleted successfully");
    },
    putSong: async(req, res) => {
        let id = req.params.id;
        let updatedSong = req.body;
        await SongModel.findByIdAndUpdate(id, updatedSong, {new: true});
        res.send(updatedSong);
    }
 
}