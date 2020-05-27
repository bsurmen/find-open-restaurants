export default function findOpenRestaurants(
  date,
  processedData,
  dataJSON,
  setHourDay
) {
  let openRestaurantsList = [];
  let dayDesired = date.getDay();
  let minuteDesired = date.getHours() * 60 + date.getMinutes();

  for (var i = 0; i < processedData.length; i++) {
    var restaurantTimeRange = processedData[i];
    for (var i = 0; i < processedData.length; i++) {
      var restaurantTimeRange = processedData[i];

      if (OpenRestaurants(restaurantTimeRange, dayDesired, minuteDesired, i)) {
        openRestaurantsList.push({
          name: dataJSON[i].name,
          times: dataJSON[i].times,
        });
      }
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