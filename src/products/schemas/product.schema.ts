import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  description: String,
});
