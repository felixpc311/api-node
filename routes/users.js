var express = require('express');
var router = express.Router();
const userController = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {title: 'Registrese'});
});

router.post('/register', userController.saveUser);



module.exports = router;
