const { Schema, model } = require("mongoose");

const CatogorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CategoryModel = model("Category", CatogorySchema);

module.exports = CategoryModel;
