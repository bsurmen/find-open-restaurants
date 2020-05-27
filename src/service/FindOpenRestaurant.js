export default function findOpenRestaurants(
  date,
  processedData,
  dataJSON,
  setHourDay
) {
  let openRestaurantsList = [];
  let dayDesired = date.getDay();
  let minuteDesired = date.getHours() * 60 + date.getMinutes();

  // Iterates of processed data to compare incoming day and hour value
  for (let i = 0; i < processedData.length; i++) {
    let restaurantTimeRange = processedData[i];

    if (OpenRestaurants(restaurantTimeRange, dayDesired, minuteDesired)) {
      openRestaurantsList.push({
        name: dataJSON[i].name,
        times: dataJSON[i].times,
      });
    }
  }

  setHourDay(openRestaurantsList);
}

function OpenRestaurants(restaurantTimeRange, dayDesired, minuteDesired) {
  let restaurantWorks = false;

  for (let timeRange of restaurantTimeRange) {
    if (
      timeRange.day == dayDesired &&
      minuteDesired >= timeRange.start &&
      minuteDesired < timeRange.end
    ) {
      restaurantWorks = true;
    }
  }

  return restaurantWorks;
}
