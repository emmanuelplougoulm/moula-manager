import { Schema, model } from 'mongoose';
import { TRANSACTION_TYPE } from '../constants/index';

const transactionSchema = new Schema({
  type: { type: String, enum: Object.values(TRANSACTION_TYPE) },
  portfolioId: String,
  transactionId: String,
  date: String,
  currency: String,
  asset: String,
  amount: Number,
  price: Number,
  fees: Number,
});

export default model('Transaction', transactionSchema);
