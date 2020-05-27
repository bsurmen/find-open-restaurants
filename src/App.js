import React, { useState } from "react";
import { makeStyles, Container } from "@material-ui/core";
import findOpenRestaurants from "./service/FindOpenRestaurant";
import ParseRestaurants from "./service/ParseRestaurants";
import CSVtoJsonParser from "./components/CSVtoJsonParser";
import RestaurantTable from "./components/RestaurantTable";
import DateHourPicker from "./components/DateHourPicker";
import Explanation from "./components/Explanation";
import DownloadCSV from "./components/DownloadCSV";

function App() {
  const [dataJSON, setDataJSON] = useState([]);
  const [hourDay, setHourDay] = useState([]);
  const [processedData, setProcessedData] = useState([]);

  const getJSONData = (JSON) => {
    setProcessedData(ParseRestaurants(JSON));
    setDataJSON(JSON);
  };

  const handlehourDay = (date) => {
    findOpenRestaurants(date, processedData, dataJSON, setHourDay);
  };

  return (
    <Container>
      <Explanation text="Full-Stack Intern Take-Home Assignment" variant="h5" />
      <DateHourPicker handlehourDay={handlehourDay} />
      <RestaurantTable content={hourDay} />
      <CSVtoJsonParser getJSONData={getJSONData} />
      <Explanation text="Don't you have the CSV file?" variant="subtitle1" />
      <DownloadCSV />
    </Container>
  );
}

export default App;
