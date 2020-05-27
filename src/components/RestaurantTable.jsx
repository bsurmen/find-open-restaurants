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
  text: {
    fontWeight: "bold",
  },
}));

export default function RestaurantTable({ content }) {
  const classes = useStyles();

  return (
    <Container className={classes.table}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.text}>Name</TableCell>
              <TableCell className={classes.text} align="left">
                Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.times}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
