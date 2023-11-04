import './LoginStyle.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

let usrnme;
const Login=()=>{
   
   const[loginStatus,setLoginStatus]=useState(false);
   

   
   const [formData,setFormData]=useState({
      email:'',
      password:'',

   });

   const handleInputChange=(e)=>{
      const{name,value}=e.target;
      setFormData({...formData,[name]:value})
   }
   const handleSubmit=async (e)=>{
      e.preventDefault();
   

   try{
      const response = await axios.post('http://localhost:8080/api/login', formData);
      setLoginStatus(true)
      usrnme=response.data.username
      console.log("Successfull: ",response.data.username);
      
      console.log(usrnme,loginStatus)

   }
   catch(error){
      console.log("Error: ",error)

   }
}
   
  return(
   loginStatus?<div>you have logged in {usrnme}</div>:
   
    <>
      <div className="content">
         <div className="text">
            Login
         </div>
         <form onSubmit={handleSubmit}>
            <div className="field">
               <input type="email" required name='email' placeholder='Email' value={formData.email} onChange={handleInputChange} /> 
               <span className="fas fa-user"></span>
               
            </div>
            <div className="field">
               <input type="password" required name='password' value={formData.password} onChange={handleInputChange} placeholder='Password'/>
               <span className="fas fa-lock"></span>
               
            </div>
            <div className="forgot-pass">
               <a href="#">Forgot Password?</a>
            </div>
            <button className='login_btns' type='submit'>Login</button>
            <div className="sign-up">
               Not a member?
               <Link to='/SignUp'>Signup now</Link>
            </div>
         </form>
      </div>
    </>
  )
}

export default Login;

