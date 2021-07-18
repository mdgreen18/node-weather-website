const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b30a76afc4448fc72360a675b1c9d185/'+ latitude + ',' + longitude

    request({url, json: true}, (error, {body}) => {        
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)
        } else{
            callback(undefined,  body.daily.data[0].summary +' High of ' + body.daily.data[0].temperatureHigh + ' and low of ' +  body.daily.data[0].temperatureLow + ' degrees. ' + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast