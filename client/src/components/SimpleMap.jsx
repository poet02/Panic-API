import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useDispatch, useSelector } from "react-redux";

const Marker = ({ text }) => <LocationOnIcon>{text}</LocationOnIcon>;

const SimpleMap = ({ panic_location, responder_location }) => {
  const center = { lat: 59.95, lng: 40.33 };
  const zoom = 1;

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDjSzLWcWKHO6F_6e9AjcticwLeDU39dS4' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={59.955413}
          lng={30.337844}
        />
        <Marker
          lat={59.955413}
          lng={35.337844}
        />
      </GoogleMapReact>
    </div>
  );
}
export default SimpleMap;