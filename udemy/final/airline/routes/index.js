var express = require('express');
var router = express.Router();

var flight = require('../flight');

var flight1 = flight({
    number: 111,
    origin: "Ha Noi",
    destination: "Hai Phong"  
});

var flight2 = flight({
    number: 222,
    origin: "Nha Trang",
    destination: "Da Nang"
});

/* GET home page. */
router.get('/flight1', function(req, res, next) {
    res.json(flight1.getInfomation());
});

router.get('/flight2', function(req, res, next) {
    res.json(flight2.getInfomation());
});

module.exports = router;
