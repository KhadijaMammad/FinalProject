import mongoose from "mongoose";
import { Schema } from "mongoose";

let premiumSchema = new Schema({
    heading: String,
    name: String,
    price: Number,
    list: String,
    info: String,
    description: String
})

export let PremiumModel = mongoose.model("premium", premiumSchema);