var express = require('express');
var router = express.Router();

var data = require('../data');
var flight = require('../flight');

var flights = []; // A collection of flight objects

for (var number in data) {
    flights[number] = flight(data[number]);
}

router.get('/flight/:number', function (req, res, next) {
    var number = req.params.number;
    // old version: request.param['number'];

    if (typeof flights[number] === 'undefined') {
        res.status(400).json({status: 'error'});
    } else {
        res.status(200).json(flights[number].getInfomation());
    }
});

router.put('/flight/:number/arrived', function (req, res, next) {
    var number = req.params.number;

    if (typeof flights[number] === 'undefined') {
        res.status(400).json({status: 'error'});
    } else {
        flights[number].triggerArrive();
        res.status(200).json({status: 'done'});
    }
});

// var flight1 = flight({
//     number: 111,
//     origin: "Ha Noi",
//     destination: "Hai Phong"  
// });

// var flight2 = flight({
//     number: 222,
//     origin: "Nha Trang",
//     destination: "Da Nang"
// });

// /* GET home page. */
// router.get('/flight1', function(req, res, next) {
//     res.json(flight1.getInfomation());
// });

// router.get('/flight2', function(req, res, next) {
//     res.json(flight2.getInfomation());
// });

module.exports = router;
