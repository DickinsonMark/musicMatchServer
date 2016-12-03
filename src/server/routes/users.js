const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.post('/signIn', function (req, res, next) {
  let {username, password} = req.body;
  usersController.signIn(username, password, (err, result) => {
    if (result === 'No user') {
      res.json({message: `${result} found`});
    } else if (result) {
      res.json({message: result});
    } else {
      res.json({message: err});
    }
  });
});

router.post('/signUp', function (req, res, next) {
  let {username, password} = req.body;
  usersController.signUp(username, password, (err, result) => {
    if (result) {
      res.json({message: result});
    } else {
      res.json({message: err});
    }
  });
});

module.exports = router;
