
exports.up = function(knex, Promise) {
  return knex.schema.createTable('leaderboard', (table) => {
    table.increments();
    table.integer('score').notNullable();
    table.string('genre').notNullable();
    table.string('username').notNullable().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('leaderboard');
};
