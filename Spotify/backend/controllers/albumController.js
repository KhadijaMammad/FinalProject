import { AlbumModel } from "../models/albumModel.js";

export let AlbumController = {
    getAll: async (req, res) => {
        const albums = await AlbumModel.find();
        res.send(albums);
    },
    getById: async (req, res) => {
        let id = req.params.id;
        const album = await AlbumModel.findById(id);
        res.send(album);
    },
    postAlbum: async (req, res) => {
        let newAlbum = new AlbumModel(req.body);
        await newAlbum.save();
        res.send(newAlbum);
    },
    deleteAlbum: async (req, res) => {
        let id = req.params.id;
        await AlbumModel.findByIdAndDelete(id);
        res.send("Album deleted successfully");
    },
}