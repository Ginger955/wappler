
exports.up = function(knex) {
  return knex.schema
    .table('gallery', function (table) {
      table.dropForeign('image_for_car');
      table.foreign('image_for_car').references('id').inTable('cars').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('gallery', function (table) {
      table.dropForeign('image_for_car');
    })
};
