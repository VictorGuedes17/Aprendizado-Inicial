const express = require('express');
const mongoose = require ('mongoose');
const requireDir = require('require-dir');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

require('./src/database/config');

requireDir('./src/models');

app.use('/dev',require('./src/routes'));

app.listen(3334);

