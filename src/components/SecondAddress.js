import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SecondAddress() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          ID/Name: 0005
        </Link>
        <Typography color="textPrimary">DAVID GARNER</Typography>
      </Breadcrumbs>
    </div>
  );
}
