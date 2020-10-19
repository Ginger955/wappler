
exports.up = function(knex) {
  return knex.schema
    .table('specs', function (table) {
      table.string('value').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('specs', function (table) {
      table.integer('value').alter();
    })
};
