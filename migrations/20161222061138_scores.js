
exports.up = function(knex, Promise) {
  return knex.schema.createTable('scores', function (table) {
    table.string('user').notNullable();
    table.integer('score').notNullable();
    table.string('country').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scores');
};
