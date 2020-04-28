import mongoose, { Schema, Document } from "mongoose";

export interface ItemInterface extends Document {
    name: string;
    price: number;
    description: string;
    image: string;
}

export const ItemSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true}
});

const Item = mongoose.model<ItemInterface>('Item', ItemSchema);

export default Item;