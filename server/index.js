// const express =require('express')
// const mongoose=require('mongoose')
// const bodyparser=require('body-parser')
// const PORT=8080
// const UserRegister =require('./middlewares/UserRegister')
// const app=express()
// const connection=require('./database/DatabaseConnection')
//  const authRoute=require('./Routes/Route')
// const cors=require('cors')
// app.use(bodyparser.json())

// app.get("/",(req,res)=>{
//     res.send("Hello server")
// app.post("/signup",(req,res)=>{
//     res.send("Signed UP")
// })
    
// })

// connection()

// app.use('/auth',authRoute)








// app.listen(PORT,()=>{
//     console.log("Server started")
// })



const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const signupRoute = require('../middlewares/UserRegister');
const loginRoute = require('../middlewares/UserLogin');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT =8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


mongoose.connect("mongodb+srv://Mitesh:Mi12te34@cluster0.cywxciw.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});




app.use('/api/signup', signupRoute);
app.use('/api/login', loginRoute);
