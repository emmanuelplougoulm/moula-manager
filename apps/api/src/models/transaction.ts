import { Schema, model } from 'mongoose';

import { TRANSACTION_TYPE } from '../constants/index';

const transactionSchema = new Schema({
  type: { type: String, enum: Object.values(TRANSACTION_TYPE) },
  walletName: String,
  date: String,
  currency: String,
  amount: Number,
  price: Number,
  fees: Number,
});

export default model('Individual', transactionSchema);
