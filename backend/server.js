import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import dbConnection from './db.connection.js';
import router from "./src/routes/user.routes.js";
const app = express()
const port =process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
dotenv.config()

app.use('/api',router)

app.listen(port, ()=>{
    console.log(`app listen at port ${port}`);
})

