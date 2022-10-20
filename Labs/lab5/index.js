const express = require('express')
const app = express()
const path = require('path');

require('dotenv').config();

const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});