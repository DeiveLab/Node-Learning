const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup hbs engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve 
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', { title: 'Weather' })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page'
    })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.render('weather', {title: 'Error', msg: 'You have to provide a search term'})
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
    
        if(error){
            return res.render('weather', { title: 'Error', msg: error })
        }else{
            forecast(latitude, longitude, (error, {current, feelslike} = {}) => {
                if(error){ return res.render('weather', { title: 'Error', msg: error }) }
                
                res.render('weather', { title: `${current}°C`, msg: location })
                
            })
        }
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Error',
        message: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error',
        message: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})