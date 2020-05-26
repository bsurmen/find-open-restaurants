import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { CSVReader } from "react-papaparse";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "2%",
    [theme.breakpoints.down("sm")]: {
       marginTop: "10%",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const CSVtoJsonParser = () => {
  const classes = useStyles();

  const handleOnDrop = async (data) => {
    let JSONArray = [];

    data.map((row) => {
      JSONArray.push({ name: row.data[0], times: row.data[1] });
    });
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log(data);
  };

  return (
    <div className={classes.root}>
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        onRemoveFile={handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    </div>
  );
};

export default CSVtoJsonParser;
