import mongoose from "mongoose";
import express from 'express'
let MONGO_URI="mongodb://Raja_Rehman:raja0000@ac-yaeuxk0-shard-00-00.7zsqx6y.mongodb.net:27017,ac-yaeuxk0-shard-00-01.7zsqx6y.mongodb.net:27017,ac-yaeuxk0-shard-00-02.7zsqx6y.mongodb.net:27017/?ssl=true&replicaSet=atlas-wk738n-shard-0&authSource=admin&retryWrites=true&w=majority"
const db_connection= async ()=>{
    try{
        await mongoose.connect(`${MONGO_URI}`)
        console.log('mongo_db connected');
    } catch(err){
        console.log('mongo_db connection err', err);
    }
}
export default db_connection()