
exports.up = function(knex) {
  return knex.schema
    .table('gallery', function (table) {
      table.integer('image_for_car').unsigned();
      table.foreign('image_for_car').references('id').inTable('cars');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('gallery', function (table) {
      table.dropForeign('image_for_car');
      table.dropColumn('image_for_car');
    })
};
