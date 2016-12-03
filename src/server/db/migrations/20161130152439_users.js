exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.text('username').notNullable().unique();
    table.string('password').notNullable();
    table.integer('experience').defaultTo(0);
    table.integer('level').defaultTo(1);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
