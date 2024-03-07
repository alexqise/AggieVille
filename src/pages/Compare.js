import React, { useState, useEffect } from 'react'
import apartmentData from './compareFiles/compare.json';
import './Compare.css'

export default function Compare(){
    const [selectedApartments, setSelectedApartments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [hoveredApartment, setHoveredApartment] = useState(null);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        const filteredResults = apartmentData.filter(apartment =>
            apartment.apartmentName.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    const handleAddApartment = (apartment) => {
        if (selectedApartments.length < 2 && !selectedApartments.includes(apartment)) {
            setSelectedApartments([...selectedApartments, apartment]);
        }
    };

    const handleRemoveApartment = (apartment) => {
        const updatedApartments = selectedApartments.filter(item => item !== apartment);
        setSelectedApartments(updatedApartments);
    };

    return (
        <div className="container">
            <div className="search-bar">
                <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
            </div>
            {searchTerm !== '' && (
                <div className="apartment-list">
                <ul>
                    {searchResults.map((apartment, index) => (
                    <li key={index} onMouseEnter={() => setHoveredApartment(index)} onMouseLeave={() => setHoveredApartment(null)}>
                        {apartment.apartmentName}
                        {hoveredApartment === index && (
                        <button onClick={() => handleAddApartment(apartment)}>Add</button>
                        )}
                    </li>
                    ))}
                </ul>
                </div>
            )}
            <div className="selected-apartments">
                <h2 className="selected-title">Selected Apartments:</h2>
                {selectedApartments.map((apartment, index) => (
                <div key={index} className="selected-apartment">
                    <h2>{apartment.apartmentName}</h2>
                    <img src={apartment.image} />
                    <p>Room Occupancy: {apartment.roomOccupancy}</p>
                    <p>Location: {apartment.location}</p>
                    <p>Price: {apartment.price}</p>
                    <button onClick={() => handleRemoveApartment(apartment)}>Remove</button>
                </div>
                ))}
            </div>
        </div>
    );
}

