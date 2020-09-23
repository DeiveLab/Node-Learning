const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const weatherURL = 'http://api.weatherstack.com/current?access_key=07062d9d18a201e27816f0ac61d7dba6&query=' + latitude + ',' + longitude

    request( { url: weatherURL, json: true }, (error, response) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(response.body.error){
            callback(response.body.error.info, undefined)
        }else{
            const data = {
                current: response.body.current.temperature,
                feelslike: response.body.current.feelslike
            }
            callback(undefined, data)
        }
    } )
}


module.exports = forecast
