
exports.up = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.string('email', 255).alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.string('email', 25).alter();
    })
};
