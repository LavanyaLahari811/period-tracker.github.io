const express = require("express");
const cartModel = require("../models/cart");

const cartRouter = express.Router();

cartRouter.post("/cartToDb", async (req, res) => {
  const { user_id, products } = req.body;
  const user_info = await cartModel.findOne({ user_id }).lean();

  if (!user_info) {
    const newInfo = new cartModel({
      user_id,
      products,
    });
    await newInfo.save();
  } else {
    const update_info = await cartModel.updateOne(
      { _id: user_info._id },
      {
        $push: {
          products: products,
        },
      }
    );
  }
  res.json({
    message: "info stored",
  });
});

cartRouter.get("/addToCart", async (req, res) => {
  const user_id = req.query.user_id;
  const product = cartModel.find({ _id: user_id });
  res.send(product);
});

module.exports = cartRouter;
