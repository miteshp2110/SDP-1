import { Link } from 'react-router-dom';
import './NavBarStyle.css'


const NavBar=()=>{
  return(
    <>
    <header>
      <nav>
              
                <div class="logo_div">
                <Link className="navbar-brand" to="/">
                    <span class="logo_container">
                        STOX
    
                    </span>
                </Link>
              
                </div>
                <Link  to="/">
                <button class="home_button">Home</button>
                </Link>
                <Link  to="/learnfirst">
                <button class="learnfirst_button">LearnFirst</button>
                </Link>
                <Link  to="/watchlist">
                <button class="watchlist_button">Watchlist</button>
                </Link>
                <Link  to="/dashboard">
                <button class="dashboard_button">Dashborad</button>
                </Link>
                <Link  to="/login">
                <button class="login_button">Login</button>
                </Link>

                
        </nav>
        </header>
    </>
  )
}

export default NavBar;
