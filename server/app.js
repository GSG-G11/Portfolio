const express = require('express');
const { join } = require('path');
const homeRouter = require('./routes/home.router');
const projectRouter = require('./routes/project.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client')));

app.set('port', process.env.PORT || 3000);

app.use('/', homeRouter);
app.use('/project', projectRouter);

module.exports = app;
