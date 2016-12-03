const knex = require('../db/connection.js');

function addExperience(username, expGain, callBack) {
  knex('users').where('username', username).then((user) => {
    let totalExp = user[0].experience + Number(expGain);
    if (totalExp < (user[0].level * 10000)) {
      knex('users').where('username', username).update({
        experience: totalExp
      }).returning('*').then((user) => {
        callBack(null, user);
      }).catch((err) => {
        callBack(err);
      });
    } else {
      let newExp = totalExp % (user[0].level * 10000);
      let newLevel = user[0].level + 1;
      knex('users').where('username', username).update({
        experience: newExp,
        level: newLevel
      }).returning('*').then((user) => {
        callBack(null, user);
      }).catch((err) => {
        callBack(err);
      });
    }
  });
}

module.exports = {
  addExperience
};
