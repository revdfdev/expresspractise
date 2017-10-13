const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/webcubicdata');

mongoose.Promise = global.Promise;

app.use(parser.json());

app.use('/api', require('./rourtes/routers'));

app.use(function(err, req, res, next) {
    //console.log(err);
    res.send({
        success: '0',
        error: err.message,
        data: [] 
    });
});

app.listen(process.env.port || '4000',  function() {
    console.log("listeninig to requests");
});
