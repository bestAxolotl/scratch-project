require('dotenv').config();
const express = require('express')
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Connected and listening on ${PORT}`);
})