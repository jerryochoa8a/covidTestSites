import React, { useEffect, useState, Image } from 'react';
import styles from '../views/Main.module.css';
import { Router, Link } from '@reach/router';

import Home from '../conponents/Home';
import Navbar from '../conponents/Navbar'
import CovidTesting from './CovidPage';



export default () => {


    return (
        <div>
            <Navbar/>

            <div className={styles.marginSpace}></div>

            <Router>
                <Home path="/"/>
                <CovidTesting path="covidTesting/:id" />
            </Router>

        </div>
    )
}