const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://adityamaneanm:Aditya6783*@cluster0.kdptvhk.mongodb.net/");

const userSchema=mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String


})
const User = mongoose.model("User", userSchema);
module.exports={
    User,
    
}