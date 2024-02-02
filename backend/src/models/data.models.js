import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
firstName:{
    type: String,
},
lastName:{
    type: String,
},
email:{
    type: String,
    required :true
},
password:{
    type: String,
    required:true
},
createdOn:{
type:Date,
default:Date.now
}
})

export const UserModel = mongoose.model('UserModel', userSchema);