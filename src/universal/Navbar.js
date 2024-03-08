import React from "react"
import { useState } from "react";
import "./Navbar.css"

export default function Navbar() {
    // create a useState hook for wheter menu bar is clicked
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }
    return(
        <>
            <nav className = 'Navbar'>
                {/* If clicked, add Navbar--text styles, if not add Navbar--text styles and Navbar--text-off */}
                <ul className={clicked ? "Navbar--text" : "Navbar--text Navbar--text--off"}>
                    <li><a className='Navbar--links' href='./'>Home</a></li>
                    <li><a className='Navbar--links' href='./map'>Map</a></li>
                    <li><a className='Navbar--links' href='./start-your-search'>Start Your Search</a></li>
                    <li><a className='Navbar--links' href='./compare'>Compare</a></li>
                </ul>
                <div className="right">
                    <img src="navbar logo2.png" alt ="logo"/>
                    <div className="mobile" onClick={handleClick}>
                        <i className= { clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}