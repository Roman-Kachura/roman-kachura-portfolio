const path = require('path');
const express = require('express');
const favicon = require('express-favicon');
const app = express();
const listenPort = process.env.PORT || 3010;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(favicon(__dirname + '/build/favicon.ico'));
// app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.send('Hello!!!');
})

app.get('/RomanKachuraCV', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/RomanKachuraCV.pdf'));
})

app.listen(listenPort, () => {
    console.log("server running on port " + listenPort);
})