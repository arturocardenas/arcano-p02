var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Contact me', description: 'This is a new demo' });
});
module.exports = router;