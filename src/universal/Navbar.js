import React from "react"
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./Navbar.css"
export default function Navbar() {
    // create a useState hook for wheter menu bar is clicked
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }

    const location = useLocation();

    useEffect(() => {
        const navLinks = document.querySelectorAll('.Navbar--links');
        const currentPath = location.pathname.split('/').pop();

        navLinks.forEach(link => {
            var listItem = link.parentElement; // Get the parent <li> element
            var home = document.querySelector('a[href="./"]');
            if (currentPath == '') {
                home.parentElement.classList.add('current-page');
            } else {
                home.classList.remove('current-page');
                if (link.getAttribute('href').includes(currentPath) && currentPath != "" && !listItem.classList.contains("getStarted")) {
                    listItem.classList.add('current-page');
                } else {
                    listItem.classList.remove('current-page');
                } 
            }
        });
    }, [location]);
    return(
        <>
            <nav className = 'Navbar'>
                {/* If clicked, add Navbar--text styles, if not add Navbar--text styles and Navbar--text-off */}
                <ul className={clicked ? "Navbar--text" : "Navbar--text Navbar--text--off"}>
                    <img src="navbar-logo2.png" alt ="logo"/>
                    <li><a className='Navbar--links home' href='./'>Home</a></li>
                    <li><a className='Navbar--links' href='./map'>Map</a></li>
                    <li><a className='Navbar--links' href='./start-your-search'>Search</a></li>
                    <li><a className='Navbar--links' href='./compare'>Compare</a></li>
                    {/* <li className ='getStarted'><a className='Navbar--links' href='./start-your-search'>Get Started</a> </li> */}
                </ul>
                <div className="right">
                    <div className="mobile" onClick={handleClick}>
                        <i className= { clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}