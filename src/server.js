const express = require('express');
const app = express();
const jsonServer = require('json-server');

const port = 3000; 

app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
  console.log(db.json)
});

app.post('/', (req, res) =>{
  res.send('Post Data Melalui bagian ini')
});

const jsonServerMiddleware = jsonServer.defaults();
const jsonServerRouter = jsonServer.router('db.json');

// Tempat untuk serve data json


app.use(jsonServerMiddleware);
app.use('/api', jsonServerRouter);

app.listen(port, () => {
  console.log("--------------------------------------------------------------")
  console.log(`Express berjalan pada url berikut => http://localhost:${port}`);
  console.log("--------------------------------------------------------------")
});
