import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
  },
  btn: {
    flexGrow: 1,
    marginTop: "2%",
    textAlign: "center",
    backgroundColor: "#d7ccc8",
    fontWeight: "bold",
  },
}));

const DownloadCSV = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a href="/assets/rest_hours.csv" target="_blank" download>
        <Button variant="contained" className={classes.btn}>
          Download
        </Button>
      </a>
    </div>
  );
};

export default DownloadCSV;
