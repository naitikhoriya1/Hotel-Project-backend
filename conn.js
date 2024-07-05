import mongoose from "mongoose";

mongoose.connect('mongodb+srv://ethicalkhoriya:WtwBWzOwSOjET7Mp@cluster0.gn0aywu.mongodb.net/formdata?retryWrites=true&w=majority&appName=Cluster0/backendbookingsite');

const con = mongoose.connection;
con.on('open', () => {
    console.log("connection success");
})

const formSchema = new mongoose.Schema({
    hotelname: String,
    hotelphone: String,
    hotelemail: String,
    hotellocation: String,
    hotelrent: String,
    hotelimage:String
})

const Form = mongoose.model('Form',formSchema)
const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type:String,
        unique:true
    },
    password: String,
    phone:String,
})

const User = mongoose.model('User',userSchema)

export {Form,User}


