const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts')
require('dotenv/config')
const bodyParser = require('body-parser');

const app = express();
const PORT = 8800;

app.use(bodyParser.json());

app.use('/posts',postRoutes)

app.get('/',(req,res)=>{
    res.send(`I'm in Home`);
})

    mongoose.connect(process.env.db_URL ,()=>{
        console.log('DataBase is Connected');
    })

app.listen(PORT,()=>{
    console.log(`Server Running at http://localhost:${PORT}`);
})
