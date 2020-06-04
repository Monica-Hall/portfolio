const express = require('express');
const path = require('path');
const app = express(); 

app.use(express.static(path.join(__dirname + '/index.html')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

app.listen(4444, () => console.log(`Running on port 4444`)) 