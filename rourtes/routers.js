const express = require('express');
const router = express.Router();
const Webcubic = require('../models/webcubic');


router.get('/webcubic', function(req, res, next) {
    res.send({type: 'GET request'});
});

router.post('/webcubic', function(req, res, next) {
    Webcubic.create(req.body).then(function(webcubic){
        res.send({
            success: '1',
            message: 'Successfully Registered',
            data: webcubic
        });
    }).catch(next);
});

router.put('/webcubic/:id', function(req, res, next) {
    Webcubic.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
        Webcubic.findOne({_id: req.params.id}).then(function(webcubic) {
            res.send(webcubic);
        });
    }).catch(next);
});

router.delete('/webcubic/:id', function(req, res, next) {
    Webcubic.findByIdAndRemove({_id: req.params.id}, req.body).then(function(webcubic) {
        res.send(webcubic);
    }).catch(next);
});

module.exports = router;