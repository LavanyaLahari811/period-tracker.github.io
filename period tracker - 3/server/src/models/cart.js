const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  products: [
    {
      product_name: {
        type: String,
      },
      product_info: {
        size: {
          type: String,
        },
        price: {
          type: Number,
        },
        other_info: {
          type: String,
        },
      },
    },
  ],
});

const cartModel = mongoose.model("cartitems", CartSchema);
module.exports = cartModel;
