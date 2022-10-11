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
 */
app.get('/', async (req, res) => {
    Ares.render('index', { title: 'AV Rental Equipment | HubSpot APIs' });
});

/**
 * * Next, we'll get the existing data from our custom object to show on our calendar. The data we're calling is from the CSV file we imported.
 */

// * This constant will be your custom object's id
const YOUR_CUSTOM_OBJECT_ID = '';

app.get('/get-data', async (req, res) => {
    // Get all rental equipment data
     const apiCall = `https://api.hubapi.com/crm/v3/objects/${YOUR_CUSTOM_OBJECT_ID}/?limit=50&archived=false&properties=name,start_date,end_date`;
     const headers = {
         Authorization: `Bearer ${process.env.PRIVATE_APP_ACCESS}`,
         'Content-Type': 'application/json'
     }
     try {
         const resp = await axios.get(apiCall, { headers });
         const data = resp.data.results;
         res.json(data);      
     } 
     catch (error) {
         console.error(error);
     } 
 });

/**
 * * Now that we've built our form, it's time to send that data to our HubSpot account upon submit.
 */
 app.post('/', async (req, res) => {
    const newEquipmentRental = {
        properties: {
            "name": req.body.chooseEquipment,
            "start_date": req.body.chooseStartDate,
            "end_date": req.body.chooseEndDate
        }
    }

    const postNewRental = `https://api.hubapi.com/crm/v3/objects/${YOUR_CUSTOM_OBJECT_ID}`;
    const headers = {
        Authorization: `Bearer ${process.env.PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    };

    try { 
        await axios.post(postNewRental, newEquipmentRental, { headers } );
        res.redirect('back');
    } catch(err) {
        console.error(err);
    }
});

//* This is how we'll listen on port 3000 when we call nodemon.
app.listen(3000, () => console.log('Listening on http://localhost:3000'));