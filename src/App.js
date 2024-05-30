import './App.css';
import { useEffect } from "react"
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./universal/Navbar.js";
import Home from "./pages/Home.js";
import StartYourSearch from './pages/start-your-search.js';
import Map from './pages/Map.js';
import Compare from './pages/Compare.js';
import ReactDOM from "react-dom"
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Login } from './components/login.js';

import axios from 'axios';




export default function App() {
  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    var data = [];
    let next = 'https://localwiki.org/api/v4/pages/';
    do {
      try {
      var response = await axios.get(next, {
        params: {
          tags: 'apartment'
        }
      });


      data = [...data, ...response.data['results']]; // concatenates all the data  
      next = response.data['next'];
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  } while (response.data.next);
  console.log('Data', data);

  };

  ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById("root"))

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/start-your-search' element={<StartYourSearch />}></Route>
          <Route path='/map' element={<Map />}></Route>
          <Route path='/compare' element={<Compare />}></Route>
          <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}
