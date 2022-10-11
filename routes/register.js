var express = require('express');
var router = express.Router();
const registerController = require('../controllers/register.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', {title: 'Registrese'});
});

router.post('/', registerController.saveRegister)

module.exports = router;
