import { PremiumController } from "../controllers/premiumController.js";
import express from "express";
 export let premiumRouter = express.Router();

 premiumRouter.get('/premium', PremiumController.getAll);
 premiumRouter.post('/premium', PremiumController.postPremium);
 premiumRouter.delete('/premium/:id', PremiumController.deletePremium);
 premiumRouter.put('/premium/:id', PremiumController.putPremium);