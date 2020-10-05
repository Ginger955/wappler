
exports.up = function(knex) {
  return knex.schema
    .table('reviews', function (table) {
      table.string('author');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('reviews', function (table) {
      table.dropColumn('author');
    })
};
