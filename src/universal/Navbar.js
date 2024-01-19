import React from "react"
import "./Navbar.css"

export default function Navbar() {
    return(
        <div>
            <nav className = 'Navbar'>
                <li><a className='Navbar--links' href='./'>Home</a></li>
                <li><a className='Navbar--links' href='./apartment-finder'>Apartment Finder</a></li>
            </nav>
            <hr></hr>
        </div>
    )
}