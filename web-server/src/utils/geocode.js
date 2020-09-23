const request = require('request')


const geocode = (address, callback) => {
    
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&language=pt&access_token=pk.eyJ1IjoiZGVpdmVzYW4iLCJhIjoiY2tlYWNnMmFvMWh3ejJydGZxcG42N2pnbCJ9.HinIzXWM3CXI_FHaSYRwEQ'

    request( { url: geocodeURL, json:true }, (error, response) => {
        if(error){

            callback('Unable to connect to location service!', undefined)
    
        }else if(!response.body.features[0]){
    
            callback('Unable to find location!', undefined)
    
        }else{
            
            const data = {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            }
            callback(undefined, data)
    
        }
    })

}


module.exports = geocode