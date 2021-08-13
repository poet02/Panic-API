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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import Moment from 'react-moment';
import UserDetails from './UserDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '2%'
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
}));


export default function PanicCard({ panic }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // const panic = data.panic;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (panic.responder) {
    console.log('SinglePanic in home list', panic.responder.responder_name)
  }
  const responder = panic.responder;



  // const userDetails = (
  //   <div >
  //     <div style={{ display: 'flex' }}>
  //       <PersonIcon fontSize='small'></PersonIcon>
  //       <Typography style={{ fontSize: '0.8em' }}>{panic.user.user_name || 'Unknown User'}</Typography>
  //     </div>
  //     <div style={{ display: 'flex' }}>
  //       <CallIcon fontSize='small'></CallIcon>
  //       <Typography style={{ fontSize: '0.8em' }}>{panic.user.user_cell}</Typography>
  //     </div> 
  //     <div style={{ display: 'flex' }}>
  //       <LocationOnIcon fontSize='small'></LocationOnIcon>
  //       <Typography style={{ fontSize: '0.8em' }}>{panic.panic_location || 'Location Unknown'}</Typography>
  //     </div> 
  //   </div>
  // )

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


  return (
    <Card key={panic.id} className={classes.root}>
      <CardHeader style={{}}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={time}
        subheader={(<UserDetails name={panic.user.user_name} location={panic.panic_location} contact={panic.user.user_cell} />)}
      />
      <CardContent style={{ fontSize: 'small', display: 'flex' }} color="textSecondary">
        {panic.responder ?
            <UserDetails
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
          <Typography paragraph>Method:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
