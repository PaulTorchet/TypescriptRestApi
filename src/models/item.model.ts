import mongoose from 'mongoose';

const uri: string = 'mongodb://127.0.0.1:27017/local';

mongoose.connect(uri, (error: any) => {
    if (error) {
        console.log('Error : ' + error);
    } else {
        console.log('Successfully connected !');
    }
});

export interface ItemInterface extends mongoose.Document {
    name: string;
    price: number;
    description: string;
    image: string;
}

export const ItemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true}
});

const Item = mongoose.model<ItemInterface>('Item', ItemSchema);

export default Item;