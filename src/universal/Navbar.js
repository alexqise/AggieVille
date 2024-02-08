import React from "react"
import "./Navbar.css"

export default function Navbar() {
    return(
        <>
            <nav>
                <ul className="Navbar--text">
                    <li><a className='Navbar--links' href='./'>Home</a></li>
                    <li><a className='Navbar--links' href='./apartment-finder'>Map</a></li>
                    <li><a className='Navbar--links' href='./apartment-finder'>Start Your Search</a></li>
                    <li><a className='Navbar--links' href='./apartment-finder'>Compare</a></li>

                </ul>
                <img src="logo192.png" alt ="logo"/>
            </nav>
        </>
    )
}