var express = require('express')
var app = express();


app.use(express.static(__dirname + '/fronted'));


app.get('/', (req, res) => {
    res.redirect('/index.html')
});

app.get('/obtener-usuario', (req, res) => {
    let usuario = [{
            id: 1,
            descripcion: 'prueba'
        },
        {
            id: 1,
            descripcion: 'prueba'
        }
    ]
    res.status(200).json(usuario)
});


var port = process.env.PORT || 3000;

app.listen(port);