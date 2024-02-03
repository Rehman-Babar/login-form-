import { UserModel } from "../models/data.models.js";
import { stringToHash } from "bcrypt-inzi";
import mongoose from "mongoose";

export const signup = (req, res)=>{
    let body =req.body;
    if (!body.email || !body.password ||  !body.firstName ||  !body.lastName  ) {
        res.status(400).send({message:`required fields missing, request example: 
        {
            "firstName": "John",
            "lastName": "Doe",
            "email": "abc@abc.com",
            "password": "12345"
        }`});
        return;
    }  // required fields missing check end
    
    UserModel.findOne({email: body.email})
    .then((data)=>{
        if (data) {
            console.log('user already exist', data);
            res.status(400).send({message:"user already exist please try a different email"})
            return;
        } else{stringToHash(body.password).then((hashStr)=>{
            UserModel.create({firstName:body.firstName, lastName:body.lastName, email:body.email, password:hashStr}).then((result)=>{
                console.log('data saved', result)
                res.status(201).send({message:'SignUp done!!!'})
            })  //usermodel.create then end
            .catch((err)=>{console.log('data base error line 29', err);
            res.status(500).send({message: 'data base error line 30 user is not created'})
        }) // usermodel.create catch end
        })} //else end
    }) ///then end  
    .catch((err)=>{
        console.log('db error line35', err);
        res.status(500).send({message:'some thing went wrong line 36'})
    })  ///catch end
}

export const getUser = async function(req, res){
    try{
        const allList = await UserModel.find({})
        res.send(allList)
    } catch(err){
        console.log(err);
        res.status(500).send({message:'Error getting user'})
    }
}


