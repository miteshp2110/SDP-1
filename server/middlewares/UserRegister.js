
// const User =require('../database/UserModel')
// const bcrypt =require('bcrypt')

// const UserRegistration=async(req,res)=>{
//     try{
//         const {firstname,lastname,email,password}={firstname:"hitesh",lastname:"ji",email:"miitesh@gmail.com",password:"salt"};
//         // const {firstname,lastname,email,password}=req.body;

        
//             const hashedpassword= await bcrypt.hash(password,10);
//             const user=new User({firstname:firstname,lastname:lastname,email:email,password:hashedpassword})
//             await user.save()
//             console.log("Success")
//             // res.send("Success")
        
//     }
//     catch(error){
//         console.log("runtime error")
//         // res.send("Errors at runtime")
//     }
// }

//  module.exports=UserRegistration





const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../database/UserModel');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { firstname,lastname,email,password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ firstname,lastname,
      email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
