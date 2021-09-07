var express = require('express')
var app = express();
app.use(express.static(__dirname + '/fronted'));

app.get('/', (req, res) => {
    res.redirect('/index.html')
});

app.listen(3000);