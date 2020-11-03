
exports.up = function(knex) {
  return knex.schema
    .table('owned_products', function (table) {
      table.dropForeign('owned_by');
      table.foreign('owned_by').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('reviews', function (table) {
      table.dropForeign('by_user');
      table.foreign('by_user').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('service_appointments', function (table) {
      table.dropForeign('for_user');
      table.foreign('for_user').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('owned_products', function (table) {
      table.dropForeign('owned_by');
    })
    .table('reviews', function (table) {
      table.dropForeign('by_user');
    })
    .table('service_appointments', function (table) {
      table.dropForeign('for_user');
    })
};
