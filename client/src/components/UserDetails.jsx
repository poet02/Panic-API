import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';

import { blue, green, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

  blue: {
    color: blue[700],
  },
  green: {
    color: green[700],
  },
  red: {
    color: red[700],
  },
}));

export default function UserDetails({ resolved, name, contact, location }) {
  const classes = useStyles();

  let userColor = '';
  if (resolved) {
    userColor = 'green' 
  }



  return (
    <div>
      <div className={classes.root +" " + classes[userColor]} style={{ display: 'flex'}}>
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
