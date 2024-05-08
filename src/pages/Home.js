import { logRoles } from '@testing-library/react';
import { Link } from 'react-router-dom';
import React from 'react';
import './Home.css'; // Import CSS file for styling
import { lightBlue } from '@mui/material/colors';

export default function Home() {
    return (
    <div style={styles.container}>
        <div style={styles.imageContainer2}>
            <img src = "home-logo.png" alt = "Aggie-Ville" style={styles.logo}/>
            <div style={styles.titlecontainer}>
                <h1 style={styles.title}>AGGIE VILLE</h1>
                <h2 style={styles.subtitle}>Statement</h2>
                <p style={styles.description}>We are dedicated to helping students in Davis find a place to live!</p>
                <h2 style={styles.subtitle}>Goals</h2>
                <p style={styles.description}>Create a user-friendly and easy to navigate website for home searching</p>
                <p style={styles.description}>Our website is unique because of it minimal style and updated information.</p>
            </div>
        </div>
      <p style={styles.description}>The best way for students at UC Davis to find a place to call home!</p>
      <Link to="/start-your-search">
        <button style={styles.button}>Start Searching</button>
      </Link>
      <div style={styles.imageContainer}>
        <img src="https://images1.apartments.com/i2/XXU-g_j-d3ottUYXPpVrOUzQZOPJSBaiWnjSOvPMPZk/117/image.jpg" alt="Apartment 1" style={styles.image} />
        <img src="https://images1.apartments.com/i2/IuqxXfNX0_YqKOPWPFqASBaM9DlCD-P9tcZShXDMaW0/117/the-u-davis-ca-kitchen-living-area.jpg?p=1" alt="Apartment 2" style={styles.image} />
      </div>
    </div>
        );
    };
        
        const styles = {
            container: {
              textAlign: 'center',
              padding: '50px',
              fontFamily: 'Montserrat, sans-serif',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#F7EFE0',
            },
            button: {
                padding: '10px 10px',
                fontSize: '18px',
                backgroundColor: '#4F7942',
                border: '2px solid #4F7942',
                color: 'white',
                borderRadius: '50px',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'background-color 0.3s',
                marginTop: '20px',
              },
            title: {
              fontSize: '100px',
              marginTop: '70px',
              marginBottom: '30px',
              fontFamily: 'thin',
              fontFamily: 'Montserrat, sans-serif',
              //fontMono: "Courier",
              //fontFamily: 'Roboto, sans-serif',
              //fontFamily: 'Poppins',
              //textDecoration: 'underline',
              padding: '10px', 
              color: '#034607',
            },
            description: {
              fontSize: '20px',
              marginBottom: '10px',
            },
            imageContainer: {
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '30px',
              marginBottom: '30px',
            },
            image: {
              width: '500px',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '10px',
            },
            logo: {
                width: '600px',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '10px',
                justifyContent:'flex-start',
              },
              subtitle:{
                fontFamily: 'lora',
                fontFamily: 'bold',
                marginTop: '30px',
                marginBottom: '30px',
                textDecoration: 'underline',
              },
              imageContainer2: {
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
                marginTop: '30px',
                marginBottom: '30px',
              },
          };

        