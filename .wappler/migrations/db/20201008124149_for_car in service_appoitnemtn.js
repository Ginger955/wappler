
exports.up = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.integer('for_car').unsigned();
      table.foreign('for_car').references('id').inTable('cars');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.dropForeign('for_car');
      table.dropColumn('for_car');
    })
};
