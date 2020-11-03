
exports.up = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.dropForeign('for_car');
      table.foreign('for_car').references('id').inTable('cars').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.dropForeign('for_car');
    })
};
