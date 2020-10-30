
exports.up = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.dropForeign('for_user');
      table.foreign('for_user').references('id').inTable('users').onDelete('NO ACTION').onUpdate('undefined');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.dropForeign('for_user');
    })
};
