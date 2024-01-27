const express = require("express");
const inputModel=require("../models/Info.js");

const router = express.Router();

router.post("/info",async(req,res)=>{
    const {user_id,date,cycle_length,periodHistory,symptomTracking,next_date}=req.body;
    
    const user_info=await inputModel.findOne({user_id}).lean();
    
    if(!user_info){
        
    const newInfo=new inputModel({user_id,start_date:date,cycle_length,periodHistory,symptomTracking,next_date});
    await newInfo.save();
    }else{
        const update_info=await inputModel.updateOne({ _id: user_info._id }, 
        { $push: { periodHistory: periodHistory,symptomTracking:symptomTracking }, 
        $set: { start_date:date,cycle_length,next_date },},
        );
    }
    res.json({
        message: "info stored"
    })
})

const infoRouter=router;
module.exports=infoRouter;