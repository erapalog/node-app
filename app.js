var express = require('express')
var app = express();

app.use(express.static(__dirname + '/fronted'));

console.log(process.env);

app.get('/', (req, res) => {
    res.redirect('/index.html')
});

app.listen(3000);