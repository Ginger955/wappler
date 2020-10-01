
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.dropColumn('reviews');
      table.dropColumn('gallery');
    })
    .dropTable('gallery')
    .dropTable('reviews')
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.string('reviews', 255);
      table.string('gallery', 255);
    })
    .createTable('gallery', function (table) {
      table.increments('id').primary().notNullable();
      table.string('photos', 255);
    })
    .createTable('reviews', function (table) {
      table.increments('id').primary().notNullable();
      table.string('text', 255);
    })
};
