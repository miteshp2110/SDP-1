const mongoose = require("mongoose");

const UserSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,

})

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);