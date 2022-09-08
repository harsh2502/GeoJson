const path=require('path');
const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');

//load environment variables
dotenv.config({path:'./config/config.env'});

const app=express();

//Body Parse
app.use(express.json());

//Enable Cors
app.use(cors());

//Routes
app.use('/api/v1/stores',require('./routes/stores'))


//App.listen
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log("Server up and running"));