import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useDispatch, useSelector } from "react-redux";

const Marker = ({ color, text }) => <LocationOnIcon color={color}>{text}</LocationOnIcon>;

const SimpleMap = ({ panic }) => {
  const zoom = 2;

  if (!panic) {
    return <div>Please select Panic</div>
  }

  let center = {
    lat: panic.panic_lat || 31,
    lng: panic.panic_lng || 25
  };

  return (
    // Important! Always set the container height explicitly
    
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDjSzLWcWKHO6F_6e9AjcticwLeDU39dS4' }}
        center={center}
        defaultZoom={zoom}
      >
        {panic.panic_lat && panic.panic_lng ?
          <Marker color='secondary'
          lat={center.lat}
          lng={center.lng}
        />: null
        }
       
        {panic.responder && panic.responder.responder_lat?
          <Marker 
            lat={panic.responder.responder_lat}
            lng={panic.responder.responder_lng}
          />
          : null
        }
      </GoogleMapReact>
    </div>
  );
}
export default SimpleMap;