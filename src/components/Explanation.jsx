import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "2%",
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Explanation = ({ text, variant }) => {
  const classes = useStyles();

  return (
    <Typography variant={variant} className={classes.root}>
      {text}
    </Typography>
  );
};

export default Explanation;
