const { Schema, model, default: mongoose } = require("mongoose");

const orderItemsScheme = new Schema({
  //sub schema
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderSchema = new Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemsScheme],
    },

    // orderItems:{
    //     type:[
    //         //you code. another type.
    //     ]
    // }

    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

const OrderModel = model("Order", OrderSchema);

module.exports = OrderModel;
