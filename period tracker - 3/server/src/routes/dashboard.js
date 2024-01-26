const express=require("express");
const inputModel=require("../models/Info.js");
const UserModel=require("../models/User.js");

const dashboardRouter = express.Router();

dashboardRouter.get("/dashboard",async(req,res)=>{
    const user_id=req.query.user_id;
    

    const res_info= await inputModel.findOne({user_id});
    const res_user=await UserModel.findOne({_id:user_id});
    const response=[res_info,res_user];
    res.send(response);
   
    
})



module.exports=dashboardRouter;