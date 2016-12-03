const knex = require('../db/connection.js');
const bcrypt = require('bcrypt');

function signIn(username, password, callBack) {
  knex('users')
  .where('username', username)
  .then((user) => {
    if (user.length) {
      if (bcrypt.compareSync(password, user[0].password)) {
        callBack(null, user);
      } else {
        callBack(null, 'No user');
      }
    } else {
      callBack(null, 'No user');
    }
  }).catch((err) => {
    callBack(err);
  });
}

function signUp(username, password, callBack) {
  bcrypt.hash(password, 13, (err, hash) => {
    if (err) {
      callBack(err);
    } else {
      let newUser = {
        username: username,
        password: hash
      };
      knex('users').insert(newUser).returning('*').then((user) => {
        callBack(null, user);
      }).catch((err) => {
        callBack(err);
      });
    }
  });
}

module.exports = {
  signIn,
  signUp
};
