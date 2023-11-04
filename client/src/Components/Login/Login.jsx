import './LoginStyle.css'
import { Link } from 'react-router-dom';


const Login=()=>{
  return(
    <>
      <div className="content">
         <div className="text">
            Login
         </div>
         <form action="#">
            <div class="field">
               <input type="text" required /> 
               <span class="fas fa-user"></span>
               <label>Email or Phone</label>
            </div>
            <div class="field">
               <input type="password" required />
               <span class="fas fa-lock"></span>
               <label>Password</label>
            </div>
            <div class="forgot-pass">
               <a href="#">Forgot Password?</a>
            </div>
            <button className='login_btns'>Login</button>
            <div class="sign-up">
               Not a member?
               <Link to='/SignUp'>Signup now</Link>
            </div>
         </form>
      </div>
    </>
  )
}

export default Login;

