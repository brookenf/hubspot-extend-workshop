const express = require("express");
const app = express();

// serve your css as static
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    // Not sure if this should be an app.get since I'm not using the APIs here specifically, but I want to use this library I found: https://nhn.github.io/tui.calendar/latest/. Maybe it does need to be a /get since I'm getting to HubSpot acct info.
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, () => console.log('Listening on http://localhost:3000'));