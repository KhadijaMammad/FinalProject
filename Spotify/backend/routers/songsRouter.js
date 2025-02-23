import express from 'express';
import { SongController } from '../controllers/songController.js';

 export const songRouter = express.Router();

songRouter.get('/songs',SongController.getAll)
songRouter.get('/songs/:id', SongController.getById)
songRouter.get('/songs/albums/:id', SongController.getArtist)
songRouter.post('/songs', SongController.postSong)
songRouter.delete('/songs/:id', SongController.deleteSong)
songRouter.put('/songs/:id', SongController.putSong)