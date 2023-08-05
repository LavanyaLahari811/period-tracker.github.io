const express=require("express");
const inputModel=require("../models/Info.js");

const router = express.Router();

router.get("/dashboard",async(req,res)=>{
    const user_id=req.query.user_id;
    

    const response= await inputModel.findOne({user_id});
    res.send(response);
   
    
})


const dashboardRouter=router;
module.exports=dashboardRouter;