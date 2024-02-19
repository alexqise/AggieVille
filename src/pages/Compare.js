import React from 'react'
import './Compare.css'

function BoxOne(){
    return(
        <section className = "box">
            <>
                <img src="https://housing.ucdavis.edu/_images/buildings/slide_shows/the-green-DSC9711.jpg" alt = "The Green at West Village"/>
                <p>The Green at West Village <br></br></p>
                <p1>About:<br></br> </p1>
                <p2>The Green at West Village is located in the UC Davis West Village neighborhood on the UC Davis campus. 
                    With its expansive solar electric arrays, the community contributes to the overall neighborhood goal of zero-net-energy. 
                    The Green at West Village offers students a variety of amenities while conveniently located adjacent to the core campus. 
                    Transportation is readily available as the ASUCD Unitrans V Line services the neighborhood frequently. 
                    The Green at West Village primarily houses incoming transfer students, but also houses second-year transfers and returning students. 
                    Residents have the opportunity to build a community while hosting social events throughout the year, giving students a chance to meet and interact with their fellow students.
                    <br></br>
                </p2>
            </>
        </section>
    )
}

/*<p>Replace with title function
<p1> Replace with general category function
<p2> Replace with general text function*/

function BoxTwo(){
    return(
        <section className = "box">
            <>
                <img src="https://theaggie.org/wp-content/uploads/2023/10/orchardpark_ca_Jersain_Medina-scaled.jpg" alt = "The Green at West Village" />
                <p>Orchard Park <br></br></p> 
                <p1>About:<br></br></p1>
                <p2>Orchard Park is located on the northwest corner of the UC Davis campus, on a 19-acre site off Russell Blvd. 
                    It is comprised of 11 4-story residential buildings and two community buildings. 
                    The community buildings provide residents with fitness rooms and study/meeting spaces. 
                    Orchard Park also features open outdoor space, a tot lot, and a network of bike/pedestrian paths. 
                    Parking will be offered in two surface parking lots — one lot adjacent to the residential buildings and one lot over a bike/ped bridge immediately to the west — as well as on-street parking. 
                    Units in the project include studios, 2-bedroom, and 4-bedroom units ranging in size from 350 to 1,150 square feet.
                    <br></br>
                </p2>
            </>
        </section>
    )
}

export default function Compare() {
    return (
        <main className = "container">
            <BoxOne />
            <BoxTwo />
        </main>
    )
}