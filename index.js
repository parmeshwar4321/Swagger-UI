const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3001;
const app = express();
const knex = require('./db/db')
const bodyParser = require('body-parser');
// app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/api',require('./routes/router'))


app.listen(port, () => console.log('server started'))
