import { Schema, model } from 'mongoose';

const portfolioSchema = new Schema({
    portfolioName: String,
    portfolioId: String,
    timeCreated: String,
    timeUpdated: String,
    assets: Array
});

export default model('portfolio', portfolioSchema);
