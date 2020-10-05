
exports.up = function(knex) {
  return knex.schema
    .table('owned_products', function (table) {
      table.dropForeign('owned_by');
      table.foreign('owned_by').references('id').inTable('users');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('owned_products', function (table) {
      table.dropForeign('owned_by');
      table.foreign('owned_by').references('id').inTable('users');
    })
};
