import { Link } from 'react-router-dom';
import './NavBarStyle.css'
const NavBar = () => {
  return (
    <>
      <nav
       
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark "
        arial-label="Furni navigation bar"
        
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            STOX<span>.</span>
          </Link>

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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/learnfirst">
                  Learnfirst
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/watchlist">
                  Watchlist
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>

            
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
