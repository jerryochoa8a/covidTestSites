import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

import '../App.css';


function CovidPage({id}) {

    const [site, setSite] = useState(null)
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/getOne/" + id)
            .then(response => {
                setSite(response.data.returned_data)
            })
            .catch(() => setHasError(true));
    }, [id]);

    console.log(site)

    if(hasError) return 'Something went wrong!';

    if(site === null) return 'Loading...';

    return (
        <>
            <div className="single-store">
            <Link className="single-store-back-link" to="/">Back to map</Link>
            <h1 className="single-store-name">{site.name}</h1>
            <div className="single-store-photos-container">
                <img className="single-store-photo" src={site.photos[0]} alt="1"/>
                <img className="single-store-photo" src={site.photos[1]} alt="2"/>
                <img className="single-store-photo" src={site.photos[2]} alt="3"/>
            </div>
            <div className="single-store-details-container">
                <div className="single-store-location">
                    <h2>Location:</h2>
                    {site.location.display_address.map((line, i) => (
                    <p className="single-store-location-line" key={i}>{line}</p>
                    ))}
                    <h2>Phone#:</h2>
                    <p className="single-store-location-line">{site.display_phone}</p>
                </div>
                <div className="single-store-hours">
                    <h2>Hours:</h2>
                    {site.hours[0].open.map((day, i) => {
                        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
                        let startType;
                        let endType;
                        parseInt(day.start) > 1159 ? startType = "pm" : startType = "am";
                        parseInt(day.end) > 1159 ? endType = "pm" : endType = "am";

                        let startHour = Math.floor((parseInt(day.start) / 100) % 12);
                        if (Math.floor(parseInt(day.start) / 100) === 12) startHour = 12;
                        let startMinutes = parseInt(day.start) % 100;
                        if (startMinutes === 0) startMinutes += "0";
                        const startTime = startHour + ":" + startMinutes + " " + startType;
                        
                        let endHour = Math.floor((parseInt(day.end) / 100) % 12);
                        if (Math.floor(parseInt(day.end) / 100) === 12) endHour = 12;
                        let endMinutes = parseInt(day.end) % 100;
                        if (endMinutes === 0) endMinutes += "0";
                        const endTime = endHour + ":" + endMinutes + " " + endType;
                        
                        return (
                            <p className="single-store-hours-line">
                                <span className="single-store-hours-day">{days[day.day]} </span><span className="single-store-hours-time">{startTime} - {endTime}</span>
                            </p>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    );
}


export default CovidPage;