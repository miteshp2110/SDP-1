import Login from '../Login/Login';
import './SignUpStyle.css'
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';


const SignUp=()=>{
  return(
    <>
      <div className="content">
         <div className="text">
            SignUp
         </div>
         <form action="#">
         <div className="field">
               <input type="text" required /> 
               <span className="fas fa-name"></span>
               <label>Name</label>
            </div>
            <div className="field">
               <input type="text" required /> 
               <span className="fas fa-user"></span>
               <label>Email or Phone</label>
            </div>
            <br></br>
            <div className="field">
               <input type="password" required />
               <span className="fas fa-lock"></span>
               <label>Password</label>
            </div>
            <br/>
            <button className='login_btns'>Sign in</button>
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
