
exports.up = function(knex, Promise) {
  table.string('user').notNullable();
  table.integer('score').notNullable();
  table.string('country').notNullable();
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scores');
};
