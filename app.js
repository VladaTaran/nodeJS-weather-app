const request = require('request');

const url = 'https://api.darksky.net/forecast/ac8dc22bfe35582031584dc85923246b/37.8267,-122.4233';

request({ url }, (error, response) => {
    try {
        const data = JSON.parse(response.body);
        
        console.log('response ', data)
    } catch {
        console.log(error);
    }
})