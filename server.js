const express = require('express');
const path = require('path');
const app = express(); 
const {SERVER_PORT} = process.env;

app.use(express.static(path.join(__dirname + '/index.html')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`)) 