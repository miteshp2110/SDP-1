import './SignUpStyle.css';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';

const SignUp=()=>{
  return(
<section className="background-radial-gradient overflow-hidden">
  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" >
        <h1 className="my-5 display-4 fw-bold ls-tight" style={{color: `hsl(218, 81%, 95%)`}}>
          Stox
        </h1>
        <p style={{color: `hsl(218, 81%, 95%)`, fontSize: 25}}>
          A one stop solution for navigating the diverse world of stock markets and  investment options.
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="First_name" className="form-control" />
                    <label className="form-label" htmlFor="First_name">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="Last_name" className="form-control" />
                    <label className="form-label" htmlFor="Last_name">Last name</label>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>

              <div className="text-center">
                <Link to="/" className="btn btn-primary btn-block mb-4">
                  Sign up
                </Link>
              </div>

              <div className="text-center">
                <hr />
                Have an account? <a href="Login">Login</a>
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

export default SignUp;
