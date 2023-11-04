import { Link } from 'react-router-dom';
import './NavBarStyle.css'


const NavBar=()=>{
  return(
    <>
    <header>
      <nav>
              
                <div className="logo_div">
                <Link className="logo_link_tag" to="/">
                    <span className="logo_container">
                        STOX
    
                    </span>
                </Link>
              
                </div>
                <Link  to="/">
                <button className="home_button">Home</button>
                </Link>
                <Link  to="/learnfirst">
                <button className="learnfirst_button">LearnFirst</button>
                </Link>
                <Link  to="/watchlist">
                <button className="watchlist_button">Watchlist</button>
                </Link>
                <Link  to="/dashboard">
                <button className="dashboard_button">Dashborad</button>
                </Link>
                <Link  to="/login">
                <button className="login_button">Login</button>
                </Link>

                
        </nav>
        </header>
    </>
  )
}

export default NavBar;
