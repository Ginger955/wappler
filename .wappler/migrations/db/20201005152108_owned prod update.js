
exports.up = function(knex) {
  return knex.schema
    .table('owned_products', function (table) {
      table.integer('car_id').unsigned();
      table.foreign('car_id').references('id').inTable('cars');
      table.integer('owned_by').unsigned();
      table.foreign('owned_by').references('id').inTable('users');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('owned_products', function (table) {
      table.dropForeign('car_id');
      table.dropColumn('car_id');
      table.dropForeign('owned_by');
      table.dropColumn('owned_by');
    })
};
