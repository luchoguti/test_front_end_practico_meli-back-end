const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const config = require('./config/initConfig');

config.initData();

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const baseRouter = require('./routers/base');
const itemRouter = require('./routers/items');
const searchRouter = require('./routers/search');

app.use('/', baseRouter);
app.use('/', searchRouter);
app.use('/', itemRouter);
/**
 * Control error 500
 */
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
        error: "Bad error server",
        message: "The server is presenting errors, please query more later, Att:Administrator."
    });
})

/***
 * Control error 404
 */
app.get('*', function(req, res){
    res.status(404).json({
        error: "resource not found",
        message: "Path no found in project, please check url, Att:Administrator."
    });
});
module.exports = app;
