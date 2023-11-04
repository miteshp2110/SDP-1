import Login from '../Login/Login';
import './SignUpStyle.css'
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';


const SignUp=()=>{
   const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:8080/api/signup', formData);
        console.log('Signup successful', response.data);
        
      } catch (error) {
        console.error('Signup error', error);
        
      }
    };
  return(loginStatus?<div>logged in</div>:
    <>
      <div className="content">
         <div className="text">
            SignUp
         </div>
         <form onSubmit={handleSubmit}>
         <div className="field">
               <input type="text" required value={formData.username} name='username' onChange={handleInputChange} placeholder='Username'/> 
               <span className="fas fa-name"></span>
               
            </div>
            <div className="field">
               <input type="email" required name='email' value={formData.email} onChange={handleInputChange} placeholder='Email'/> 
               <span className="fas fa-user"></span>
               
            </div>
            <br></br>
            <div className="field">
               <input type="password" required name='password' value={formData.password} onChange={handleInputChange} placeholder='Password'/>
               <span className="fas fa-lock"></span>
               
            </div>
            <br/>
            <button className='login_btns' type='submit'>Sign in</button>
            <div className="sign-up">
               Already a member?
               <Link to='/Login'>Login</Link>
            </div>
         </form>
      </div>
    </>
  )
}

export default SignUp;
