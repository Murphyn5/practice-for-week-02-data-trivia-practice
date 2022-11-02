/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `temperatureRange` - What is the temperature range for each month in each
city?

In this case, temperature range is the difference in temperature between the
high temperature and low temperature in a given month ( range = high - low ).

Write a function, `temperatureRange` that takes in the climate data, and returns
a new copy of the array that includes all of the city data. Each city object
should have a "monthlyTemperatureRange" key that points to an array of objects
formatted to match the example output below:

[
  {
    "id": 1,
    "city": "Amsterdam",
    "country": "Netherlands",
    "monthlyTemperatureRange": [
        { "month": "January", high: x, low: x, range: x },
        { "month": "February", high: x, low: x, range: x },
        // ... continued for all 12 months
    ]
  },
  // ... constinued for all cities in the original climateData array
]:

Note: You can solve this in multiple ways. Try using a few advanced array
methods. Can you use helper methods to separate out the logic?
*/

temperatureRange = function (data) {

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let newdata = []

  for (let city of data) {
    newdata.push({
      "id": city.id,
      "city": city.city,
      "country": city.country,
      "monthlyTemperatureRange": [
        {"month": "January", "high": city.monthlyAvg[months.indexOf("January")].high, "low": city.monthlyAvg[months.indexOf("January")].low, "range": city.monthlyAvg[months.indexOf("January")].high - city.monthlyAvg[months.indexOf("January")].low},
        {"month": "February", "high": city.monthlyAvg[months.indexOf("February")].high, "low": city.monthlyAvg[months.indexOf("February")].low, "range": city.monthlyAvg[months.indexOf("February")].high - city.monthlyAvg[months.indexOf("February")].low},
        {"month": "March", "high": city.monthlyAvg[months.indexOf("March")].high, "low": city.monthlyAvg[months.indexOf("March")].low, "range": city.monthlyAvg[months.indexOf("March")].high - city.monthlyAvg[months.indexOf("March")].low},
        {"month": "April", "high": city.monthlyAvg[months.indexOf("April")].high, "low": city.monthlyAvg[months.indexOf("April")].low, "range": city.monthlyAvg[months.indexOf("April")].high - city.monthlyAvg[months.indexOf("April")].low},
        {"month": "May", "high": city.monthlyAvg[months.indexOf("May")].high, "low": city.monthlyAvg[months.indexOf("May")].low, "range": city.monthlyAvg[months.indexOf("May")].high - city.monthlyAvg[months.indexOf("May")].low},
        {"month": "June", "high": city.monthlyAvg[months.indexOf("June")].high, "low": city.monthlyAvg[months.indexOf("June")].low, "range": city.monthlyAvg[months.indexOf("June")].high - city.monthlyAvg[months.indexOf("June")].low},
        {"month": "July", "high": city.monthlyAvg[months.indexOf("July")].high, "low": city.monthlyAvg[months.indexOf("July")].low, "range": city.monthlyAvg[months.indexOf("July")].high - city.monthlyAvg[months.indexOf("July")].low},
        {"month": "August", "high": city.monthlyAvg[months.indexOf("August")].high, "low": city.monthlyAvg[months.indexOf("August")].low, "range": city.monthlyAvg[months.indexOf("August")].high - city.monthlyAvg[months.indexOf("August")].low},
        {"month": "September", "high": city.monthlyAvg[months.indexOf("September")].high, "low": city.monthlyAvg[months.indexOf("September")].low, "range": city.monthlyAvg[months.indexOf("September")].high - city.monthlyAvg[months.indexOf("September")].low},
        {"month": "October", "high": city.monthlyAvg[months.indexOf("October")].high, "low": city.monthlyAvg[months.indexOf("October")].low, "range": city.monthlyAvg[months.indexOf("October")].high - city.monthlyAvg[months.indexOf("October")].low},
        {"month": "November", "high": city.monthlyAvg[months.indexOf("November")].high, "low": city.monthlyAvg[months.indexOf("November")].low, "range": city.monthlyAvg[months.indexOf("November")].high - city.monthlyAvg[months.indexOf("November")].low},
        {"month": "December", "high": city.monthlyAvg[months.indexOf("December")].high, "low": city.monthlyAvg[months.indexOf("December")].low, "range": city.monthlyAvg[months.indexOf("December")].high - city.monthlyAvg[months.indexOf("December")].low},
      ]
    }
    )
  }
  return newdata
}

console.log(temperatureRange(climateData))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ temperatureRange ];
