import React from "react"
import "./Navbar.css"

export default function Navbar() {
    return(
        <>
            <nav className = 'Navbar'>
                <li><a className='Navbar--links' href='./'>Home</a></li>
                <li><a className='Navbar--links' href='./Map'>Map</a></li>
                <li><a className='Navbar--links' href='./apartment-finder'>Start Your Search</a></li>
                <li><a className='Navbar--links' href='./Compare'>Compare</a></li>
    
            </nav>
        </>
    )
}