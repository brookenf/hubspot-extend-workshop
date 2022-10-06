/**
 * * Call the consts you need to run Express, axios, and body-parser
 */ 
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

//* Instantiate Express
const app = express();

//* Express app.use for JSON encoding
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* Use dotenv inside of a node app
require('dotenv').config();

//* Use pug as the view engine
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//* Use this to serve up static files from public directory
app.use(express.static(__dirname + '/public'));


/**  
 * * First, we'll create a route at the root (/) where our web app will appear.
 * TODO: Use app.get to call the route, render 'index' file of PUG, send title to index.pug file. 
 */
app.get('/', (req, res) => {
    res.render('index')
})
/**
 * * Next, we'll get the existing data from our custom object to show on our calendar. The data we're calling is from the CSV file we imported.
 * TODO: Get the custom object ID, then include that in the API endpoint we're sending. We'll use our private app token we made earlier for authorization. Then, we want to view our results in JSON at /get-data route.
 */

/**
 * * Now that we've built our form, it's time to send that data to our HubSpot account upon submit.
 * TODO: Use app.post to send form data to HubSpot, using the the POST API endpoint. Then, when the POST works, redirect to the page you're currently on to show updated calendar.
 */

//* This is how we'll listen on port 3000 when we call nodemon.
app.listen(3000, () => console.log('Listening on http://localhost:3000'));