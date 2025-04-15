import { Schema, model } from "mongoose";

const quoteSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  quote_en: { type: String, required: true },
  quote_pt: { type: String, required: true },
  author: { type: String, required: true },
});

export const Quote = model("Quote", quoteSchema);
