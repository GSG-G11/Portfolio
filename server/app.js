const { join } = require('path');
const express = require('express');
const homeRouter = require('./routes/home.router');
const projectRouter = require('./routes/project.router');
const { clientError, serverError } = require('./controllers/error.controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client')));

app.set('port', process.env.PORT || 3000);

app.use('/', homeRouter);
app.use('/project', projectRouter);

app.use(clientError);
app.use(serverError);

module.exports = app;
