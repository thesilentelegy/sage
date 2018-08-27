const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes/index');                       // working
const voterBatch = require('./routes/voterbatch');              // working
const voterSection = require('./routes/votersection');          // working
const candidateParty = require('./routes/candidateparty');      // working
const candidatePosition = require('./routes/candidateposition') // working
const candidate = require('./routes/candidate')                 // working
const user = require('./routes/user')                           // working
const voteStore = require('./routes/votestore')                 // ...

const app = express();

app.use(logger('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/api/v1/', voterBatch);
app.use('/api/v1/', voterSection);
app.use('/api/v1/', candidateParty);
app.use('/api/v1/', candidatePosition);
app.use('/api/v1/', candidate);
app.use('/api/v1/', user);
app.use('/api/v1/', voteStore);

module.exports = app;