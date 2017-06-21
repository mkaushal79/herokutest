var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Heroku Test App', company: "Five Star" });
  
});

module.exports = router;
