import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from './Components/SignUp/SignUp';
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import WatchList from './Components/Watchlist/WatchList';
import Dashboard from './Components/Dashboard/DashBoard'
import LearnFirst from './Components/LearnFirst/LearnFirst';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes >
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/Learnfirst' element={<LearnFirst/>}></Route>
          <Route exact path='/Watchlist' element={<WatchList/>}></Route>
          <Route exact path='/Dashboard' element={<Dashboard/>}></Route>
          <Route exact path='/Login' element={<Login/>}></Route>
          <Route exact path='/SignUp' element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
