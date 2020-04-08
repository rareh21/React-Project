import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNextRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > : * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Personnel
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Employee Information
        </Link>
        <Typography color="textPrimary">Fixed Allowance</Typography>
      </Breadcrumbs>
    </div>
  );
}
