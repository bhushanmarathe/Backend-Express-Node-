const { Schema, model } = require("mongoose");

const HospitalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    specialized: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const HostipalModel = model("Hospital", HospitalSchema);

module.exports = HostipalModel;
