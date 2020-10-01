
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.string('image');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.dropColumn('image');
    })
};
