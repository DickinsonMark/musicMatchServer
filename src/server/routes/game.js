const express = require('express');
const router = express.Router();

const gameController = require('../controllers/game');

router.post('/gameOver', function (req, res, next) {
  const {username, expGain} = req.body;
  gameController.addExperience(username, expGain, (err, data) => {
    if (err) res.json({message: err});
    else res.json({message: data});
  });
});

module.exports = router;
