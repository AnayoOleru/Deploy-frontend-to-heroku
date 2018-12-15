const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/images", express.static(_dirname + '/images'));
app.use("/scripts", express.static(_dirname + '/scripts'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'views/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + 'views/about.html'));
})

app.listen(process.env.PORT || 8080);