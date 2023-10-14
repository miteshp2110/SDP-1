import Login from '../Login/Login';
import './SignUpStyle.css'
import NavBar from '../NavBar/NavBar';

const SignUp=()=> {
  return(
    <>
    <NavBar />
<section className="background-radial-gradient overflow-hidden">
  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" >
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: `hsl(218, 81%, 95%)`}}>
          The best offer <br />
          <span >for your business</span>
        </h1>
        <p className="mb-4 opacity-70" >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
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
                    <label className="form-label" for="First_name">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="Last_name" className="form-control" />
                    <label className="form-label" for="Last_name">Last name</label>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" for="form3Example3">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label className="form-label" for="form3Example4">Password</label>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>
              </div>

              <div className="text-center">
                <hr />
                <span className="mb-2">
                  Have an account?
                </span>
                <button type="submit" className="btn btn-primary btn-block mb-2" style={{background: 'none', border: 'none', color: 'blue'}}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default SignUp;
