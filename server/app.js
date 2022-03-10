const { join } = require('path');
const express = require('express');
const homeRouter = require('./routes/home.router');
const errorRouter = require('./routes/error.router');

const projectRouter = require('./routes/project.router');
const categoryRouter = require('./routes/category.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client')));

app.set('port', process.env.PORT || 3000);

app.use('/', homeRouter);
app.use('/project', projectRouter);
app.use('/getCategories', categoryRouter);

app.use(errorRouter);

module.exports = app;
