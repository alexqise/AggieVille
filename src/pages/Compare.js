import React, { useState, useEffect, useRef } from 'react';
import data from './compareFiles/compare.json';
import './Compare.css';

export default function Compare() {
    const [selectedApartments, setSelectedApartments] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [hoveredApartment, setHoveredApartment] = useState(null);
    const searchRef = useRef(null); // Ref for the search input element

    useEffect(() => {
        const filteredResults = data.filter(apartment =>
            apartment.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    }, [searchTerm]);
    
    useEffect(() => {
        // Function to handle clicks outside of the search results
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchTerm(""); // Clear search term to hide the results
            }
        }
        // Adding event listener to the document
        document.addEventListener("click", handleClickOutside);
        return () => {
            // Cleanup: remove the event listener when the component unmounts
            document.removeEventListener("click", handleClickOutside);
        };
    }, [searchRef]);

    const handleAddApartment = (apartment) => {
        if (selectedApartments.length < 2 && !selectedApartments.includes(apartment)) {
            setSelectedApartments([...selectedApartments, apartment]);
            setSearchTerm(""); // Close the search list by clearing the search term
            setSearchResults([]); // Clear the search results
        }
    };

    const handleRemoveApartment = (apartment) => {
        const updatedApartments = selectedApartments.filter(item => item !== apartment);
        setSelectedApartments(updatedApartments);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="container">
            <div className="search-bar" ref={searchRef}>
                    <input type="text" placeholder="Start Your Search..." value={searchTerm} onChange={handleSearch} />
            </div>
            {searchTerm !== '' && (
                <div className="apartment-list">
                    <ul>
                        {searchResults.map((apartment, index) => (
                            <li 
                                key={index} 
                                onMouseEnter={() => setHoveredApartment(index)} 
                                onMouseLeave={() => setHoveredApartment(null)} 
                                onClick={() => handleAddApartment(apartment)}
                                style={{ cursor: 'pointer' }}
                            >
                                {apartment.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="selected-apartments">
                {selectedApartments.map((apartment, index) => (
                    <div key={index} className="selected-apartment">
                        <button className="remove-button" onClick={() => handleRemoveApartment(apartment)}>X</button>
                        <h2>{apartment.name}</h2>
                        <div>
                            <div>                                    <img src={apartment.image} alt="Apartments"/>
                                <p>{apartment.rooms}, {apartment.baths}</p>
                                <p><strong>Price Range:</strong> {apartment.priceRange}</p>
                                <p>{apartment.inBill}</p>
                                <p><strong>Location:</strong> {apartment.location}</p>
                            </div>
                            <p><strong>Features and Amenities:</strong></p>
                            <ul>
                                <li>{apartment.laundry}</li>
                                <li>{apartment.ac_Heater}</li>
                                <li>{apartment.furnished}</li>
                                <li>{apartment.wifi}</li>
                                <li>{apartment.pool}</li>
                                <li>{apartment.gym}</li>
                                <li>{apartment.petFriendly}</li>
                            </ul>
                            <a className="Link" href={apartment.websiteLink} target="_blank" rel="noopener noreferrer">Link to their official Website</a>
                        </div>
                    </div>
                 ))}
            </div>
                
        </div>

    );
}
