const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('/ : hello from node! / ');
});

// app.get('/node', (req, res) => {
//   res.send('[/node] hello from node!');
// });

app.get('/add', (req, res) => {
  res.send('/add: hello from node!');
});

app.listen(5000);
