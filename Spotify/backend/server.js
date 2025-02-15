import express from "express";
import cors from "cors";
import {config} from "dotenv";
import spotifyDB from "./config/config.js";
import {router} from "./routers/userRouter.js";
import {premiumRouter} from "./routers/premiumRouter.js";
import Stripe from "stripe";
import {albumRouter} from "./routers/albumRouter.js";
import { songRouter } from "./routers/songsRouter.js";


const app = express();
app.use(express.json());
app.use(cors());
config();
spotifyDB();

app.use("/users", router);
app.use("/", premiumRouter);
app.use("/", albumRouter);
app.use('/', songRouter)

const stripe = new Stripe(process.env.PUBLISHABLE_SECRET_KEY);

app.post("/create-payment-intent", async (req, res) => {
  const {amount, currency} = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: {enabled: true},
    });

    res.json({clientSecret: paymentIntent.client_secret});
  } catch (error) {
    console.error("Error while creating payment intent:", error);
    res.status(500).json({error: error.message});
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
