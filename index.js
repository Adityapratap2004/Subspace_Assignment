const express=require('express');
const app=express();
require('dotenv').config();


const PORT=process.env.PORT;

app.use('/api',require('./Routes/Blog'));


app.listen(PORT,(req,res)=>{
    console.log("Listening  on the port ",PORT);
})
