import { Schema, model } from 'mongoose';

const portfolioSchema = new Schema({
    name: String,
});

export default model('Portfolio', portfolioSchema);