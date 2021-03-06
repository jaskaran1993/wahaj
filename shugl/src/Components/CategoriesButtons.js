import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';



const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    outlineColor: 'primary',
    border: '2px solid #D6324A',
    backgroundColor: 'white',
    width: 170,
    height: 50
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

  let history = useHistory();

  const routeChange = () => {

    if (props.id === 'Farmhouses') {
      history.push('/view/farmhouse')
    }
    else if (props.id === 'Beach Hut') {
      history.push('/view/beachhut')
    }
    else if (props.id === 'Hotels') {
      history.push('/view/hotel')
    }
    else if (props.id === 'Caterers') {
      history.push('/view/caterer')
    }
    else if (props.id === 'Event Decorators') {
      history.push('/view/eventdecorator')
    }
    else if (props.id === 'Photogrphers') {
      history.push('/view/photographer')
    }
    else if (props.id === 'Transporation') {
      history.push('/view/transport')
    }
    else if (props.id === 'Lawns and Banquets') {
      history.push('/view/lawnandbanquet')

    }
  }

  return (
    <div>
      <Button
        id={props.id}
        variant="contained"
        className={classes.button}
        startIcon={props.startIcon}
        onClick={routeChange}
      >
        {props.name}
      </Button>
    </div>
  )
}