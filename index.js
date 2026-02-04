import express from 'express';
import dotenv from 'dotenv';
import './models/db.js'
import router from './router/routes.js';
dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', router);
app.use('/',(req,res)=>{
    res.send("hello");
})
app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server started on port ${process.env.PORT}`);
})