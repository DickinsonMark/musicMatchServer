const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.post('/login', function (req, res, next) {
  let {username, password} = req.body;
  usersController.logIn(username, password, (err, result) => {
    if (result === 'No user') {
      res.json({message: `${result} found`});
    } else if (result) {
      res.json({message: result});
    } else {
      res.json({message: err});
    }
  });
});

router.post('/signup', function (req, res, next) {
  let {username, password} = req.body;

  usersController.signUp(username, password, (err, result) => {

  });
});

module.exports = router;
