var express = require('express');
var router = express.Router();

/* GET home page. */
router
.get(['/','/accueil'], function(req, res, next) {
  res.render('index', { 
    title: 'Accueil',
    dateMenu : 'Du 10 janvier au 16 janvier 2022',
    priceMenu : '12'
  })
})
.get('/carte-et-menu', function(req, res, next) {
  res.render('carte-et-menu',{ 
    title: 'Carte et Menu'
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
