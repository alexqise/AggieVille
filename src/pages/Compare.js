import React from 'react'
import './Compare.css'

function BoxOne(){
    return(
        <div className = "box">
            <PlaceOne />
        </div>
    )
}
function BoxTwo(){
    return(
        <div className = "box">
            <PlaceTwo />
        </div>
    )
}

function PlaceOne() {
    return(
        <div>
            <img src="https://housing.ucdavis.edu/_images/buildings/slide_shows/the-green-DSC9711.jpg" alt = "The Green at West Village" className = "image-container" />
        </div>
    )
}

function PlaceTwo() {
    return(
        <div>
            <img src="https://theaggie.org/wp-content/uploads/2023/10/orchardpark_ca_Jersain_Medina-scaled.jpg" alt = "The Green at West Village" className = "image-container" />
        </div>
    )
}
export default function Compare() {
    return (
        <div className = "container">
            <BoxOne />
            <BoxTwo />
        </div>
    )
}