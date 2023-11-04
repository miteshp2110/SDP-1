// const User=require('../database/UserModel')
// const bcrypt=require('bcrypt')
// const UserLogin =async (req,res)=>{
//     try{
//         const {email,password}=req.body
//         const user=User.findOne({email});
//         if(!user){
//             return res.status(400).send("Invalid Credentials")
//         }
//         const passwordMatch=await bcrypt.compare(password,user.password)

//         if(passwordMatch){
//             res.status(200).send("Login successfull");
//         }
//         else{
//             res.status(400).send("Invalid Credentials")
//         }
//     }

// catch(error){
//     res.status(500).send("Error caught")
// }
// }

// module.exports=UserLogin


const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../database/UserModel');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
