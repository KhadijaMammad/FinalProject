import { PremiumModel } from "../models/premiumModel.js";

 export let PremiumController = {
    getAll: async(req, res)=>{
        const premiums = await PremiumModel.find();
        res.send(premiums);
    },
    postPremium: async(req, res) => {
        let newInfo = new PremiumModel(req.body);
        await newInfo.save();
        res.send(newInfo);
    },
    deletePremium: async(req, res) =>{
        let id  = req.params.id;
        await PremiumModel.findByIdAndDelete(id);
        res.send({
            message: "Premium deleted successfully"
        })
    },
    putPremium: async(req,res)=>{
        let id = req.params.id;
        let updatedInfo = req.body;
        await PremiumModel.findByIdAndUpdate(id, updatedInfo, {new: true});
        res.send(updatedInfo);
    }

}