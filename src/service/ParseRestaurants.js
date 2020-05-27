export default function ParseRestaurants(dataJSON) {
  // Converts incoming data into [times: [[days, startMinute, endMinute], ... ] format

  let processedData = [];

  for (let i = 0; i < dataJSON.length - 1; i++) {
    processedData.push(ParseSingleRestaurant(dataJSON[i]));
  }
  return processedData;
}

const ParseSingleRestaurant = (restaurants) => {
  let singleRestaurantArr = [];

  const splitedTimesArray = restaurants.times.split("/ ");

  // Sends single restaurant data to be parsed
  for (let i = 0; i < splitedTimesArray.length; i++) {
    let dayRange = splitedTimesArray[i];
    singleRestaurantArr = singleRestaurantArr.concat(
      ParseSingleRange(dayRange)
    );
  }
  return singleRestaurantArr;
};

const ParseSingleRange = (dayRange) => {
  let numStart = dayRange.search(/\d/);
  let allDays = dayRange.substring(0, numStart - 1);
  let bothTimes = dayRange.substring(numStart);
  let start = HourToMinutes(bothTimes.split(" - ")[0]);
  let end = HourToMinutes(bothTimes.split(" - ")[1]);
  let restaurantDayHour = [];
  for (let dateRange of allDays.split(", ")) {
    let multipleDays = MultiDays(dateRange, start, end);
    restaurantDayHour = restaurantDayHour.concat(multipleDays);
  }
  return restaurantDayHour;
};

const HourToMinutes = (timeString) => {
  let time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i); // Returns an array of time values
  let pm = time[4];
  let hours = parseInt(time[1], 10);

  if (hours == 12 && !pm) {
    hours = 0;
  } else {
    hours += hours < 12 && pm ? 12 : 0;
  }
  let minutes = time[3] ? parseInt(time[3], 10) : 0;
  return hours * 60 + minutes;
};

const MultiDays = (dateRange, start, end) => {
  let lastDayOfRange;
  let numberOfDays;
  let daysSplit = dateRange.split("-");
  let firstDayOfRange = StringToDay(daysSplit[0]);

  if (daysSplit[1]) {
    lastDayOfRange = StringToDay(daysSplit[1]);
  } else {
    lastDayOfRange = firstDayOfRange;
  }

  if (lastDayOfRange < firstDayOfRange) {
    numberOfDays = 7 - firstDayOfRange + lastDayOfRange + 1;
  } else {
    numberOfDays = lastDayOfRange - firstDayOfRange + 1;
  }

  let restaurantDayHour = [];
  for (let i = 0; i < numberOfDays; i++) {
    let currentDay = (firstDayOfRange + i) % 7;
    if (end < start) {
      // Splits days into 2 if open hours exist after midnight
      restaurantDayHour.push({ day: currentDay, start: start, end: 24 * 60 });
      let nextDay = (firstDayOfRange + i + 1) % 7;
      restaurantDayHour.push({ day: nextDay, start: 0, end: end });
    } else {
      restaurantDayHour.push({ day: currentDay, start: start, end: end });
    }
  }
  return restaurantDayHour;
};

const StringToDay = (day) => {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(day);
};
