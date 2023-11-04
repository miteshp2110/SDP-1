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
            <div className="field">
               <input type="text" required /> 
               <span className="fas fa-user"></span>
               <label>Email or Phone</label>
            </div>
            <div className="field">
               <input type="password" required />
               <span className="fas fa-lock"></span>
               <label>Password</label>
            </div>
            <div className="forgot-pass">
               <a href="#">Forgot Password?</a>
            </div>
            <button className='login_btns'>Login</button>
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

