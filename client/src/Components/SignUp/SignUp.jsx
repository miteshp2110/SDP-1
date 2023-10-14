import './SignUpStyle.css'
import NavBar from '../NavBar/NavBar';


const SignUp=()=>{
s
    return(
      <>
      <NavBar/>
        
<section className="background-radial-gradient overflow-hidden">
  

  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" >
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: 'white'}}>
          The best offer <br />
          <span >for your business</span>
        </h1>
        <p  color='light white'>
        "The most important quality for an investor is temperament, not intellect. You need a temperament that neither derives great pleasure from being with the crowd or against the crowd." 
        
        </p>
        <p style={{ fontWeight: 'bold' }}>-- by Warren Buffett </p>

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
                    {/* Taking First name input id="First_name" */}
                    <input type="text" id="First_name" className="form-control" />
                    <label className="form-label" for="First_name">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    {/* Taking Last name input id="First_name" */}
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
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" for="form3Example3">Password</label>
              </div>

              

              
              {/* <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                <label className="form-check-label" for="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div> */}

              
             

              <div className="text-center"></div>
              <button type="submit" className="btn btn-primary btn-block mb-4">
              SignUp
              </button>
              
              <div className="text-center">

                <button type="submit" className="btn btn-primary btn-block mb-4">
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