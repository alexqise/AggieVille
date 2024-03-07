import React from 'react'
import './Map.css'

const GooglePageComponent = () => {
    return (
        <div className="google-page">
          <iframe src="https://www.google.com/maps/d/embed?mid=143FaYqKt4n6PNsugPkgSCaWuwaMumlw&ehbc=2E312F&noprof=1" width="100%" height="100%" style= {{border: "none"}} ></iframe>        
        </div>
    );
  }
  
export default GooglePageComponent;