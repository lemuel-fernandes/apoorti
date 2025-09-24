require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const logger = require('./config/logger');

logger.info('Logger initialized');

var app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    logger.info("Connected to DB");
    app.listen(PORT , ()=>{
        logger.info(`Server started on port ${PORT}`);
    })
})
.catch((err)=>{ 
    logger.error("Error connecting to DB: ", err);
})