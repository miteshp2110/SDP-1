require('dotenv').config();
const { configDotenv } = require('dotenv');
const mongoose=require('mongoose');

const mongooseUrl="mongodb+srv://Mitesh:Mi12te34@cluster0.cywxciw.mongodb.net/?retryWrites=true&w=majority";


const connection=()=>{
    mongoose.connect(mongooseUrl);
    const databse=mongoose.connection

    databse.on('error',(error)=>{
    console.log(error)
    })
    databse.once('connected',()=>{
    console.log("Database Connected")
    })
}

module.exports=connection
