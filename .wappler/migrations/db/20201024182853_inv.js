
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.integer('invisible');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.dropColumn('invisible');
    })
};
