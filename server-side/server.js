const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('client'));

//get the home page
app.get('/', function(req, res){
    res.sendFile('C:/Users/jaedo/Desktop/cio-app/client/public/index.html');
});

//listen on port
app.listen(3000, function(){console.log('Server listening on port 3000.  Press Ctr+C to exit.')});