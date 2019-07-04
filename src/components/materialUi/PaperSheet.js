import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SecondaryButton from "./SecondaryButton";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

function PaperSheet({ url, title }) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography component="p">
          <SecondaryButton href={url} text="Visit The Website" />
        </Typography>
      </Paper>
    </div>
  );
}

export default PaperSheet;
