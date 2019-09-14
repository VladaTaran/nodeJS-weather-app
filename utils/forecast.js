const request = require('request');

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/ac8dc22bfe35582031584dc85923246b/${lat},${long}`
    request({ url, json: true }, (error, response) => {
        if(error) {
           callback('Error ', undefined);
        } else if(response.body.error) {
            callback('Coordinate error. Please try with correct format of coordinates.');
        } else {
            const result = response.body;
            callback(undefined, `${result.daily.data[0].summary} It is currently ${result.currently.temperature} degrees out. There is a ${result.currently.precipProbability} % chance of rain.`)
        }
    })
};

module.exports = forecast;