
exports.up = function(knex) {
  return knex.schema
    .table('gallery', function (table) {
      table.dropForeign('image_for_car');
      table.foreign('image_for_car').references('id').inTable('cars').onUpdate('SET NULL').onDelete('SET NULL');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('gallery', function (table) {
      table.dropForeign('image_for_car');
    })
};
