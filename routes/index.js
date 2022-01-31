var express = require('express');
var router = express.Router();

const data = {
  dateMenu : 'Du 10 janvier au 16 janvier 2022',
  priceMenu : 12
}

/* GET home page. */
router
.get(['/','/accueil'], function(req, res, next) {
  res.render('index', {
    data
  })
})
.get('/carte-et-menu', function(req, res, next) {
  res.render('carte-et-menu',{ 
    title: 'Carte et Menu', data
  })
})
.get('/restaurant', function(req, res, next) {
  res.render('restaurant',{ 
    title: 'Le Restaurant'
  })
})
.get('/galerie', function(req, res, next) {
  res.render('galerie',{ 
    title: 'Galerie'
  })
})
.get('/contact-et-acces', function(req, res, next) {
  res.render('contact-et-acces',{ 
    title: 'Contact et acces'
  })
})



module.exports = router;
