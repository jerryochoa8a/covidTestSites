import React, { Component, useEffect } from 'react';
import styles from './Map2.module.css';
import { Link } from '@reach/router';


import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class Map2 extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
      onMarkerClick = (props, marker, e) =>{
        //   this.props.onMarkerClick(hospital)

          this.setState({
              selectedPlace: props,
              activeMarker: marker,
              showingInfoWindow: true
            });
            console.log(props)
        }
        
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };



    render() {

        // console.log()

        return (
            <>
                <div>

                    <Map style={{ width: "65%", height: "95%" }}
                        google={this.props.google}
                        resetBoundsOnResize={true}
                        onClick={this.onMapClicked} //
                        zoom={12}
                        center={{
                            lat: this.props.lat,
                            lng: this.props.long
                        }}
                    >

                        {this.props.hospitals.map(hospital => (
                            <Marker
                                key={hospital.id}
                                name={hospital.name}
                                host_id={hospital.id}
                                image_url={hospital.image_url}
                                position={{ lat: hospital.coordinates.latitude, lng: hospital.coordinates.longitude }}
                                onClick={this.onMarkerClick}
                            />
                        ))}

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                                <Link to={"/covidTesting/" + this.state.selectedPlace.host_id}>
                                    <div style={{width:"120px",height:"150px",textAlign: "center"}}>
                                        <img className={styles.infoImage} src={this.state.selectedPlace.image_url} alt={this.state.selectedPlace.name}/>
                                        <h6>{this.state.selectedPlace.name}</h6>
                                    </div>
                                </Link>
                        </InfoWindow>

                    </Map>
                </div>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("")
})(Map2)