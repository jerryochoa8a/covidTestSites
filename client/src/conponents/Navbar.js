import React from 'react';
import styles from './Navbar.module.css';
// import { Navbar, Nav } from 'bootstrap';

function Navbar() {
    return (
        <div className={styles.bcolor}>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <nav style={{backgroundColor:' #c41200',textAlign: "center"}} className="navbar navbar-expand-lg  navbar-dark fixed-top ">
                <p className={styles.name}>Covid Test Sites</p>
            </nav>

        </div>
    )

}

export default Navbar;