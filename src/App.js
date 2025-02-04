import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import CoinPage from './pages/coin';
import ComparePage from './pages/ComparePage';
import WatchlistPage from './pages/watchlist';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(){
  return (
    <div className="App">
      <ToastContainer />
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/dashboard" element={<Dashboard/>}></Route>
           <Route path="/coin/:id" element={<CoinPage/>}></Route>
           <Route path='/compare' element={<ComparePage/>}/>
           <Route path='/watchlist' element={<WatchlistPage/>} />
           </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
