
exports.up = function(knex) {
  return knex.schema
    .createTable('gallery', function (table) {
      table.increments('id');
      table.string('photos');
    })
    .createTable('reviews', function (table) {
      table.increments('id');
      table.string('text');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('gallery')
    .dropTable('reviews')
};
