import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Navbar from "./universal/Navbar.js"
import Home from "./pages/Home.js"
import FindApartments from './pages/Find-Apartments';




export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/apartment-finder' element={<FindApartments />}></Route>
        </Routes>
    </>
  )
}
