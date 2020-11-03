
exports.up = function(knex) {
  return knex.schema
    .table('owned_products', function (table) {
      table.dropForeign('car_id');
      table.foreign('car_id').references('id').inTable('cars').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('owned_products', function (table) {
      table.dropForeign('car_id');
    })
};
