const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


if(!process.argv[2]){
    console.log('Please provide an address')
}else{
    geocode(process.argv[2], (error, {latitude, longitude, location} = {}) => {
    
        if(error){
            console.log(error)
        }else{
            forecast(latitude, longitude, (error, {current, feelslike} = {}) => {
                if(error){
                    console.log(error)
                }else{
                    console.log(location)
                    console.log(`It is ${current} degrees out, with a feeling of ${feelslike} degrees`)
                }
            })
        }
    })
}


