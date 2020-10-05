
exports.up = function(knex) {
  return knex.schema
    .table('reviews', function (table) {
      table.date('date');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('reviews', function (table) {
      table.dropColumn('date');
    })
};
