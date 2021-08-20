import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue, green, red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Moment from 'react-moment';
import UserDetails from './UserDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '2%',
    marginBottom: '10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
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


export default function PanicCard({ filterState, panic, onUpdateMap, selected }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // const panic = data.panic;
  if (filterState.hasResponder && !panic.responder) {
    return null;
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const responder = panic.responder;

  const handleUpdateGoogleMap = (panic) => onUpdateMap(panic);

  let cardColor = 'red';
  let responderCompleted = false;

  if (panic.responder) {
    cardColor = 'blue'
    if (panic.responder_completed_at) {
      responderCompleted = true;

    }
  }

  if (panic.user_helped_at && responderCompleted) {
    cardColor = 'green'
  }



  const time = (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <div color="textSecondary" style={{ fontSize: '0.5em', color: 'textSecondary' }}>
        <Moment format="DD MMM YYYY">
          <p>{panic.createdAt}</p>
        </Moment>
      </div>
      <Moment format="HH:mm">
        {panic.createdAt}
      </Moment>

    </div>
  )

  let selectedPanicClass = '';
  if (selected === panic.id) {
    selectedPanicClass = 'solid blue';
  }

  return (
    <Card style={{ border: selectedPanicClass, cursor: 'pointer' }} className={classes.root + " " + classes[cardColor]} onClick={() => handleUpdateGoogleMap(panic)}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={time}
        subheader={
          (
            <UserDetails
              resolved={panic.user_helped_at ? true : false}
              name={panic.user.user_name}
              location={panic.panic_location}
              contact={panic.user.user_cell}
            />
          )
        }
      />
      <CardContent style={{ fontSize: 'small', display: 'flex' }} color="textSecondary">
        {panic.responder ?
          <UserDetails
            resolved={panic.responder_completed_at ? true : false}

            name={responder.responder_name}
            contact={responder.responder_cell}
            location={responder.responder_location} />
          :
          <div style={{ fontSize: 'small', display: 'flex' }}>No Responder Assigned</div>}
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Extra Panic Details</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
