
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.string('price');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.dropColumn('price');
    })
};
