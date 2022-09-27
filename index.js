const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');


const app = express();
 
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.get('/', async (req, res) => {
    // Get all rental equipment data
    const apiCall = 'https://api.hubapi.com/crm/v3/objects/{objectType}/?limit=10&archived=false';
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    }
    try {
        const resp = await axios.get(apiCall, { headers });
        const data = resp.data.results;
        res.render('index', { title: 'AV Rental Equipment | HubSpot APIs', data });      
    } 
    catch (error) {
        console.error(error);
    }
});

app.listen(3000, () => console.log('Listening on http://localhost:3000'));