const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url= 'https://api.darksky.net/forecast/47056be849437df7bfb20b9c0bfab8c2/'+ latitude +','+longitude+'?units=si'

    request({url: url, json: true}, (error,response) =>{
        if(error) {
            callback('Unable to connect to weather service!',undefined)
        }else if (response.body.error) {
            callback('unable to find location',undefined)
        }else{
            callback(undefined,response.body.daily.data[0].summary+ "It is currently "+response.body.currently.temperature+" degree out."+ " There is a "+response.body.currently.precipProbability+"% chance of rain");//above work same as it 
        }
    })
}

//using destructuring 

/*const forecast = (latitude, longitude, callback) =>{
    const url= '://api.darksky.net/fhttpsorecast/47056be849437df7bfb20b9c0bfab8c2/'+ latitude +','+longitude+'?units=si'

    request({url, json: true}, (error,{ body }) =>{
        if(error) {
            callback('Unable to connect to weather service!',undefined)
        }else if (body.error) {
            callback('unable to find location',undefined)
        }else{
            callback(undefined, body.daily.data[0].summary+ "It is currently "+body.currently.temperature+" degree out."+ " There is a "+body.currently.precipProbability+"% chance of rain");//above work same as it 
        }
    })
}*/


module.exports = forecast