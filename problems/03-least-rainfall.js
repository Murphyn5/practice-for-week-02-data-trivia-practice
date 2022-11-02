/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `leastRainfall` Which cities have the least rainfall in a given month?

Write a function, `leastRainfall` that takes in the climate data and a month,
and returns an array of cities that have the least rainfall in that month. It
should include all cities that recieve less than 10 mm rainfall in that month.

For example, if there are three cities have less than 10 mm, the returned array
should look like:

[ "city1, country1: x mm", "city2, country2: x mm", "city3, country3: x mm" ]
(Each city's data is a formatted string data type).

Note: You can solve this in multiple ways. Try using a few advanced array
methods!

Hint: How can you identify and access the correct data for a month such as
"March"?
*/

leastRainfall = function (data, month) {

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    monthindex = months.indexOf(month)
    let citiesWithLeastRain = []

    for (let city of data) {
        if (getRainfall(city, monthindex) < 10) {
            let name = city.city
            let country = city.country

            citiesWithLeastRain.push(name + ", " + country + ": " + Math.floor(getRainfall(city, monthindex)) + " mm")
        }
    }

    return citiesWithLeastRain

}



getRainfall = function (city, month) {
    let sum = 0
    return city.monthlyAvg[month].rainfall
}

// city = {
//     "id": 75,
//     "city": "Salt Lake City UT",
//     "country": "United States",
//     "monthlyAvg": [
//       {
//         "high": 4,
//         "low": -6,
//         "dryDays": 16,
//         "snowDays": 12,
//         "rainfall": 34.5
//       },
//       {
//         "high": 7,
//         "low": -4,
//         "dryDays": 15,
//         "snowDays": 9,
//         "rainfall": 36.5
//       },
//       {
//         "high": 14,
//         "low": 0,
//         "dryDays": 18,
//         "snowDays": 6,
//         "rainfall": 43.2
//       },
//       {
//         "high": 18,
//         "low": 4,
//         "dryDays": 16,
//         "snowDays": 4,
//         "rainfall": 50.1
//       },
//       {
//         "high": 24,
//         "low": 8,
//         "dryDays": 18,
//         "snowDays": 1,
//         "rainfall": 46.2
//       },
//       {
//         "high": 30,
//         "low": 13,
//         "dryDays": 21,
//         "snowDays": 0,
//         "rainfall": 27.5
//       },
//       {
//         "high": 35,
//         "low": 18,
//         "dryDays": 23,
//         "snowDays": 0,
//         "rainfall": 12.9
//       },
//       {
//         "high": 34,
//         "low": 17,
//         "dryDays": 21,
//         "snowDays": 0,
//         "rainfall": 15.3
//       },
//       {
//         "high": 28,
//         "low": 11,
//         "dryDays": 21,
//         "snowDays": 0,
//         "rainfall": 27.3
//       },
//       {
//         "high": 20,
//         "low": 5,
//         "dryDays": 22,
//         "snowDays": 1,
//         "rainfall": 38
//       },
//       {
//         "high": 11,
//         "low": -1,
//         "dryDays": 18,
//         "snowDays": 6,
//         "rainfall": 36.4
//       },
//       {
//         "high": 5,
//         "low": -6,
//         "dryDays": 19,
//         "snowDays": 11,
//         "rainfall": 28.9
//       }
//     ]
//   }






/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [leastRainfall];
