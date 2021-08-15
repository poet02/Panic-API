import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';



export default function UserDetails({ name, contact, location }) {



  return (
    <div>
      <div style={{ display: 'flex' }}>
        <PersonIcon fontSize='small'></PersonIcon>
        <Typography style={{ fontSize: '0.8em' }}>{name || 'Unknown User'}</Typography>
      </div>
      <div style={{ display: 'flex' }}>
        <CallIcon fontSize='small'></CallIcon>
        <Typography style={{ fontSize: '0.8em' }}>{contact}</Typography>
      </div>
      <div style={{ display: 'flex' }}>
        <LocationOnIcon fontSize='small'></LocationOnIcon>
        <Typography style={{ fontSize: '0.8em' }}>{location || 'Location Unknown'}</Typography>
      </div>
    </div>
  );
}
