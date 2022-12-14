import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        minlength:6
    }
});
export default mongoose.model('User',UserSchema);