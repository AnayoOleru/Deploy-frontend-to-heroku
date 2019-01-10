const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
require('babel-polyfill');
const User = require('./controller/userCtr');

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/scripts", express.static(__dirname + '/scripts'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/v1', (req, res) => res.status(200).send({
    status: 'connection successful',
    message: 'Welcome to 9JAZZ',
  }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/about', function(req, res) {
        res.sendFile(path.join(__dirname + '/views/about.html'));
})

app.post('/api/v1/users', User.create);
// user can login 
app.post('/api/v1/users/login', User.login);

// Handle 404: send an 404 error page
app.use(function(req, res) {
    res.status(404).sendFile(path.join(__dirname + '/errors/404.html'));
 });
 
 // Handle 500: send a 500 error
 app.use(function(error, req, res, next) {
    res.status(500).sendFile(path.join(__dirname + '/errors/500.html'));
 });


app.listen(process.env.PORT || 8080,  function(){
    console.log("Oh yes, go on with your request, I am listening!")
});
