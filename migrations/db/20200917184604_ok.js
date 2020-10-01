
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.dropColumn('reviews');
      table.dropColumn('gallery');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.string('reviews', 255);
      table.string('gallery', 255);
    })
};
