import './NavBarStyle.css'
const NavBar = () => {
  return (
    <>
      <nav
       
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark "
        arial-label="Furni navigation bar"
        
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            STOX<span>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="shop.html">
                  Learnfirst
                </a>
              </li>
              <li>
                <a className="nav-link" href="about.html">
                  Watchlist
                </a>
              </li>
              <li>
                <a className="nav-link" href="services.html">
                  Dashboard
                </a>
              </li>
              <li>
                <a className="nav-link" href="blog.html">
                  Login
                </a>
              </li>
            </ul>

            
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
