import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import filter from './functions.js';
import dotenv from 'dotenv';

const app = express();
const Port = 9000;
dotenv.config()

const corsOptions ={ origin:'http://localhost:3000' , credentials:true , optionSuccessStatus:200 }
app.use(cors(corsOptions));

async function main() {
  try{
  await mongoose.connect(process.env.MONGOOSE_PATH);
  }
  catch(error){
    console.log(error.message);
  }
}

main();

app.listen(Port, () => {
  console.log(`Example app listening on port: http://localhost:${Port}`)
})