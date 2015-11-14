var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');


var app = express();

app.use(middleware.addHeaders);

app.use(bodyParser.json());




app.get('/name', mainCtrl.getName);

app.get('/location', mainCtrl.getLocation);

app.get('/occupations', mainCtrl.getOccupations);

app.get('/occupations/latest', mainCtrl.getLatestOccupation);

app.get('/hobbies', mainCtrl.getHobbies);

app.get('/hobbies/:type', mainCtrl.getHobbiesByType);

app.put('/name', mainCtrl.changeName);

app.put('/location', mainCtrl.changeLocation);

app.post('/hobbies', mainCtrl.addHobby);

app.post('/occupations', mainCtrl.addOccupation);

app.get('/skillz', mainCtrl.getSkillz);

app.post('/skillz', mainCtrl.addSkillz);





app.listen(3000, function() {
    
    console.log('listening on port 3000...');
});