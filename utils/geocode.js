const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidmxhZGF0YXJhbiIsImEiOiJjazA2anp1NTUwMWJjM2drNHkxMTZpZTY1In0.QUFTfz_PVW8_LRlFqZrRsw`
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to servieces!', undefined)
        } else if (!response.body.features) {
            callback('Unable to find location.Try another search.', undefined)
        } else {
            const data = response.body.features[0];
            callback(undefined, {
                latitude: data.center[0],
                longitude: data.center[1],
                location: data.place_name
            })
        }
    })
};

module.exports = geocode;