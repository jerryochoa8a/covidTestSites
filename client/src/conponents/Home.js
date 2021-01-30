import React, { Component, useState, useEffect } from 'react';
import styles from './Home.module.css';
import axios from 'axios';

import Map2 from './Map2'
import List from './List'



function Home() {

    const [lat, setLat] = useState(34.052235)
    const [long, setLong] = useState(-118.243683)
    const [hospitals, setHospitals] = useState([])

    const [redo, setRedo] = useState(false);
    // const [selectedPlace, setSelectedPlace] = useState(null);

    

    const Locate = () => {
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                setRedo(true);
            });
        }

    }

    useEffect(() => {
        axios.get("http://localhost:8000/lat/" + lat + "/long/" + long)
            .then(response => {
                setHospitals(response.data.returned_data.businesses)
                setRedo(false);
            })
            .catch(err => console.log(err));
    }, [redo]);

    console.log("latitude: " + lat + " longitude: " + long)
    console.log(hospitals)


    if(hospitals === null) return 'Loading...';

    return (
        <>
            <div>
                {/* <h1 style={{ display: "inline-block" }}>Find a Covid Test Site Near you!</h1>
                <button onClick={Locate} style={{ display: "inline-block" }}>Use my location</button> */}


                <div>
                    <Map2 
                    lat={lat} 
                    long={long} 
                    hospitals={hospitals} />

                    <List hospitals={hospitals} />

                </div>

                <div style={{position: "absolute", bottom: "0px",marginBottom:"1px"}}>
                    <h1 style={{ display: "inline-block", marginLeft:"20px" }}>Find a Covid Test Site Near you!</h1>
                    <button onClick={Locate} className={styles.button}>Use my Location</button>
                </div>

            </div>
        </>
    );
}


export default Home;

