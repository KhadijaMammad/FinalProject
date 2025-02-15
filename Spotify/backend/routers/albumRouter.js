import express from "express";
import { AlbumController } from "../controllers/albumController.js";
 export const albumRouter = express.Router();

 albumRouter.get('/albums', AlbumController.getAll)
 albumRouter.get('albums/:id', AlbumController.getById)
 albumRouter.post('/albums', AlbumController.postAlbum)
 albumRouter.delete('/albums/:id', AlbumController.deleteAlbum)