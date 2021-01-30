import React, { Component, useState } from 'react';
import styles from './List.module.css'
import { Link } from '@reach/router';

import home from './Home'



function List(props) {

    // const [hospitals, setHospitals] = useState(this.props.hospitals) 
        if(props.hospitals === []) return 'Loading...';

        return (
            <>
                <div style={{width: "30%", height:"70%",  float: "right", marginRight: "20px"}}>

                    {/* <div> */}
                        {/* <button onClick={hom Locate}>locate</button> */}
                    {/* </div> */}

                    {/* pick boxes */}
                    <div style={{overflowY:"scroll", height:"700px",width:"auto", position:"relative",  }}>

                        {props.hospitals.map((hospitals, idx)=>{
                            return(
                                <>
                                    <Link className={styles.link} to={"/covidTesting/"+hospitals.id}>
                                        <div key={hospitals.id} className={styles.optionBox}>
                                            <img className={styles.imgBox} src={hospitals.image_url}></img>
                                            <div className={styles.titleBox}>
                                                <p style={{fontSize:"16px"}}>{hospitals.name}</p>
                                                <p style={{fontSize:"12px"}}>{hospitals.location.city}, {hospitals.location.state}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </>

                            )
                        })}                      


                    </div>
                    {/* pick boxes */}
                    
                </div>
            </>
        );
    }

export default List;