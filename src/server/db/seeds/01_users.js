
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: 'monoposon', password: 'Monopoly1'}),
        knex('users').insert({username: 'bobbarker', password: 'Price$100'}),
        knex('users').insert({username: 'bobRoss', password: 'L1ttl3Tr33'})
      ]);
    });
};
