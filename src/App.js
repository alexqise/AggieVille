import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Navbar from "./universal/Navbar.js";
import Home from "./pages/Home.js";
import FindApartments from './pages/Find-Apartments.js';
import Map from './pages/Map.js';
import Compare from './pages/Compare.js';





export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/apartment-finder' element={<FindApartments />}></Route>
            <Route path='/Map' element={<Map />}></Route>
            <Route path='/Compare' element={<Compare />}></Route>
        </Routes>
    </>
  )
}
