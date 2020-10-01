
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.dropColumn('class');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.string('class', 255);
    })
};
