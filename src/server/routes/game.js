const express = require('express');
const router = express.Router();

const gameController = require('../controllers/game');

router.post('/gameOver', function (req, res, next) {
  const {username, expGain} = req.body;
  gameController.addExperience(username, expGain, (err, data) => {
    console.log(data);
  });
});

module.exports = router;
