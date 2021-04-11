import { model, Schema, Document } from 'mongoose';

export interface IPortfolio extends Document {
    _id: string,
    crypto: string,
    amount_coins: number,
    purchase_price: number,
    current_price: number,
    total_value: number,
}

export const portfolioSchema = new Schema({
    crypto: {
        type: Number,
        required: true,
    },
    amount_coins: {
        type: Number,
        required: true,
        trim: true,
    },
    purchase_price: {
        type: Number,
        required: true,
        trim: true,
    },
    current_price: {
        type: Number,
        trim: true,
    },
    total_value: {
        type: Number,
        trim: true,
    },
    timestamps: true, //not sure if that's correct way of doing that
});

export default model<IPortfolio>("Portfolio", portfolioSchema);