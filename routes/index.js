var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    titleIndex: 'Quai des machines',
    dateMenu : 'Du 10 janvier au 16 janvier 2022',
    priceMenu : '12'
  })
});

module.exports = router;
