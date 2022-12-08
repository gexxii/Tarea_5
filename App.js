const express = require('express');
const { dirname } = require('path');

const path = require('path');

const app = express();

app.get('/Buscar.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/Buscar.js'));
});

app.get('/agregar', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Public/agregar.html'));
});

app.get('/capturar.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/capturar.js'));
});
app.get('/traer.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/traer.js'));
});

app.get('/listacompleta', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Public/lista.html'));
});
app.get('/function.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/function.js'));

})

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname +'/index.html'));
});

app.listen(3000, ()=>{
    console.log('Working...', 3000)
});



