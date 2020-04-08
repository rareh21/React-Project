import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ReactButton() {
  const classes = useStyles();

  return (
    <div style={{display:"inline"}} className="float-right">
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        // startIcon={<CloseOutlinedIcon />}
      >
        Save & Close
      </Button>

      <Button
        variant="contained"
        color="default"
        size="small"
        className="float-right"
        className={classes.button}
        // startIcon={<CloudUploadIcon />}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        className={classes.button}
        startIcon={<CloseOutlinedIcon />}
      >
        Close
      </Button>
    </div>
  );
}
