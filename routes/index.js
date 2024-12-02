var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET About me Page. */
router.get('/about', function(req, res, next) {
  res.render('About', { title: 'About me' });
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('Projects', { title: 'Projects Page' });
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact me' });
});
module.exports = router;

