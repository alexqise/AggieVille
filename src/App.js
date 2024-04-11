import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"
import {
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Navbar from "./universal/Navbar.js";
import Home from "./pages/Home.js";
import StartYourSearch from './pages/start-your-search.js';
import Map from './pages/Map.js';
import Compare from './pages/Compare.js';

import axios from 'axios';




export default function App() {
  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = () => {
    // Set up Axios request
    axios.get('https://localwiki.org/api/v4/pages/', {
      params: {
        tags: 'apartment' // Replace 'park' with the tag you want to filter by
      }
    })
    .then(response => {
      // Handle successful response
      console.log('Data', response.data);
    })
    .catch(error => {
      // Handle error
      console.error('Error fetching users:', error);
    });
  };

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/start-your-search' element={<StartYourSearch />}></Route>
          <Route path='/map' element={<Map />}></Route>
          <Route path='/compare' element={<Compare />}></Route>
      </Routes>
    </>
  )
}
