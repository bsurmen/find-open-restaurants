import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import CSVtoJsonParser from "./components/CSVtoJsonParser";
import RestaurantTable from "./components/RestaurantTable";
import DateHourPicker from "./components/DateHourPicker";
import Explanation from "./components/Explanation";
import DownloadCSV from "./components/DownloadCSV";

function App() {
  return (
    <Container>
      <Explanation text="Full-Stack Intern Take-Home Assignment" variant="h5" />
      <DateHourPicker />
      <RestaurantTable />
      <CSVtoJsonParser />
      <Explanation
        text="Don't you have the CSV file?"
        variant="subtitle1"
      />
      <DownloadCSV />
    </Container>
  );
}

export default App;
