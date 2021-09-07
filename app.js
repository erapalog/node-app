var express = require('express')
var app = express();

require("dotenv").config();

app.use(express.static(__dirname + '/fronted'));


app.get('/', (req, res) => {
    res.redirect('/index.html')
});


var port = process.env.PORT || 3000;

app.listen(port);