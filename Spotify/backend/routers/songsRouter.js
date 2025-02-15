import express from 'express';
import { SongController } from '../controllers/songController.js';

 export const songRouter = express.Router();

songRouter.get('/songs',SongController.getAll)
songRouter.get('/songs/:id', SongController.getById)
songRouter.post('/songs', SongController.postSong)
songRouter.delete('/songs/:id', SongController.deleteSong)
songRouter.put('/songs/:id', SongController.putSong)