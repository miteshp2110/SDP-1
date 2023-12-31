import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from './Components/SignUp/SignUp';
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import WatchList from './Components/Watchlist/WatchList';
import Dashboard from './Components/Dashboard/DashBoard'
import LearnFirst from './Components/LearnFirst/LearnFirst';
import Footer from './Components/Footer/Footer';
import { RedirectFunction } from 'react-router-dom';
import Profile from './Components/Profile/Profile';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar/>
      <Routes >
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/learnfirst' element={<LearnFirst/>}></Route>
          <Route exact path='/watchlist' element={<WatchList/>}></Route>
          <Route exact path='/dashboard' element={<Dashboard/>}></Route>
          <Route exact path='/Login' element={<Login/>}></Route>
          
          <Route exact path='/SignUp' element={<SignUp/>}></Route>
          <Route exact path='/Profile' element={<Profile/>}></Route>
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
