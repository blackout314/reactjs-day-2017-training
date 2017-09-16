const express = require('express')
const todos = require('./todos')

const PORT = 3001

const app = express();

app.get('/todo', (req, res)  => {
  res.send(todos.get());
});

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});