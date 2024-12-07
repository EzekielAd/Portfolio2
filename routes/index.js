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

/* GET Project1 description page. */
router.get('/project1', function(req, res, next) {
  res.render('Projects1', { title: 'Project 1 Page' });
});

/* GET Project2 description page. */
router.get('/project2', function(req, res, next) {
  res.render('Project2', { title: 'Project 2 Page' });
});

/* GET Project3 description page. */
router.get('/project3', function(req, res, next) {
  res.render('Project3', { title: 'Project 3 Page' });
});

/* GET Project4 description page. */
router.get('/project4', function(req, res, next) {
  res.render('Project4', { title: 'Project 4 Page' });
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact me' });
});
module.exports = router;

