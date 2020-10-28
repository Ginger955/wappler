
exports.up = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.integer('serv_hours_end').unsigned();
      table.foreign('serv_hours_end').references('id').inTable('service_hours');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.dropForeign('serv_hours_end');
      table.dropColumn('serv_hours_end');
    })
};
