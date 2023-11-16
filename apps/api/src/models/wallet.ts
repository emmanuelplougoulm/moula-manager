import { Schema, model } from 'mongoose';

const walletSchema = new Schema({
    name: String,
});

export default model('Wallet', walletSchema);