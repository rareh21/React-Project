import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0.25),
    color: theme.palette.text.secondary,
  },
}));

export default function FirstGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{textAlign:'left', color:'#263238', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',borderTopLeftRadius: 12, borderTopRightRadius: 12,fontSize:20, fontFamily:'Roboto', fontWeight:'bold'}}>Fixed Allowance</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
