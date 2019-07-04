import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

export default function Spinner() {
  const classes = useStyles();
  console.log("spinner")
  return (
    <div>
      <CircularProgress   className={classes.progress} color="secondary" />
    </div>
  );
}