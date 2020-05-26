import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: "2%",
  },
}));

export default function RestaurantTable({ range }) {
  const classes = useStyles();

  return (
    <Container className={classes.table}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell align="right">time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                test
              </TableCell>
              <TableCell align="right">test</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
