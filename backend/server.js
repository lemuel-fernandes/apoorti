require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


var app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Connected to DB");
    app.listen(PORT , ()=>{
        console.log(`Server started on port ${PORT}`);
    })
})
.catch((err)=>{ 
    console.log("Error connecting to DB: ", err);
})