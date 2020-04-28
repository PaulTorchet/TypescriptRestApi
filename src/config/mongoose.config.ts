import mongoose, { mongo } from 'mongoose';

import * as dotenv from "dotenv";
dotenv.config();

const uri: string = process.env.MONGO_URI as string;

export default () => {
  const  connect = () => {

    mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
      .then(() => {
        return console.log(`[Mongoose] Successfully connected to ${uri}`);    
      }).catch((err) => {
        return console.log('[Mongoose] Error connecting to database : ', err);    
      });

  };

  connect();

  mongoose.connection.on('disconnected', connect);

}