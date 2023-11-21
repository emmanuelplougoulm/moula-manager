import { Schema, model } from 'mongoose';

import { TRANSACTION_TYPE } from '../constants/index';

const transactionSchema = new Schema({
  type: { type: String, enum: Object.values(TRANSACTION_TYPE) },
  portfolioName: String,
  date: String,
  currency: String,
  symbol: String,
  quantity: Number,
  price: Number,
  fees: Number,
});

export default model('Transaction', transactionSchema);
