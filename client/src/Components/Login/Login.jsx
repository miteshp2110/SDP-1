import './LoginStyle.css';
import SignUp from '../SignUp/SignUp';
import { Link } from 'react-router-dom';

const titleStyleColor= {
  color: `hsl(218, 81%, 95%)`,
};
const Login=()=>{
  return(
<section className="background-radial-gradient overflow-hidden">
  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" >
        <h1 className="my-5 display-4 fw-bold ls-tight" style={titleStyleColor}>
          Stox
        </h1>
        <p className="mb-5 display-6 ls-tight" style={titleStyleColor}>
          Welcome Back!
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>

              <div className="text-center">
                <a href="#" className="btn btn-primary btn-block mb-4">
                  Login
                </a>
              </div>

              <div className="text-center">
                <hr/>
                Don't have an account? <Link to="/SignUp">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Login;
