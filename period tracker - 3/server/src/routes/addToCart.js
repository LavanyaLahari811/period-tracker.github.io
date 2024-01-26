const express = require("express");
const inputModel = require("../models/Info");
const cartModel = require("../models/cart");

const cartRouter = express.Router();

cartRouter.post("/checkout", async (req, res) => {
  const { user_id, products} = req.body;
  const user_info = await inputModel.findOne({ user_id }).lean();

  if (!user_info) {
    const newInfo = new cartModel({
      user_id,
      products
    });
    await newInfo.save();
  } else {
    const update_info = await cartModel.updateOne(
      { _id: user_info },
      {
        $push: {
          products:products
        }
      }
    );
  }
  res.json({
    message: "info stored",
  });
});
