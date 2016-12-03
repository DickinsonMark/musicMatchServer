const knex = require('../db/connection.js');

function logIn(username, password, callBack) {
  knex('users')
  .where('username', username)
  .then((user) => {
    console.log(user);
    if (user.length) {
      callBack(null, user);
    } else {
      callBack(null, 'No user');
    }
  }).catch((err) => {
    callBack(err);
  });
}

function signUp(username, password, callBack) {
  console.log('signUp');
}

module.exports = {
  logIn,
  signUp
};
