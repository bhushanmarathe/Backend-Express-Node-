const { Schema, model } = require("mongoose");

const MedicalRecordSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    passsword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MedicalRecordModel = model("MedicalRecord", MedicalRecordSchema);

module.exports = MedicalRecordModel;
