import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

Joi.objectId = JoiObjectId(Joi);

 export let SongValidationSchema = ({
    name: Joi.string().required(),
    youtubeId: Joi.string().required(),
    coverImage: Joi.string().required(),
    artist: Joi.string().required(),
    artistId: Joi.objectId()
})