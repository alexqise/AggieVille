import logo from './logo.svg';
import './App.css';
import { useState } from "react"
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





export default function App() {
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
