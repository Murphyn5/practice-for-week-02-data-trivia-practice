/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `citiesWithMostSnowDays` Which cities have the most snow days?

Write a function, `citiesWithMostSnowDays` that returns an array of objects,
that includes data on the cities that have the highest number of snow days
across all months.

For example, if the maximum number of snow days across all months is 10, and two
cities have 10 snow days each, the returned array would look like:

[
    { "city": "City Name 1, Country Name", "totalSnowDays": 10 },
    { "city": "City Name 2, Country Name", "totalSnowDays": 10 },
]

Note: You can solve this in multiple ways. Try using a few advanced array
methods!
*/

citiesWithMostSnowDays = function(data){

citiesWithMostSnow = []
max = 0
for(let city of data){
    if(getSnowdays(city) > max){
        max = getSnowdays(city)
    }
}

for(let city of data){
    if(getSnowdays(city) === max){
        citiesWithMostSnow.push({"city":city.city + ", " + city.country, "totalSnowDays": getSnowdays(city)})
    }
}

return citiesWithMostSnow

}



getSnowdays = function(city){
    sum = 0
    for(let month of city.monthlyAvg){
        sum += month.snowDays
    }
    return sum
}

console.log(citiesWithMostSnowDays(climateData))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ citiesWithMostSnowDays ];
