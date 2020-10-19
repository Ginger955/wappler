
exports.up = function(knex) {
  return knex.schema
    .table('specs', function (table) {
      table.integer('value');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('specs', function (table) {
      table.dropColumn('value');
    })
};
