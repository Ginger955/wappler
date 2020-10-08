
exports.up = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.integer('serv_hours_ref').unsigned();
      table.foreign('serv_hours_ref').references('id').inTable('service_hours');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.dropForeign('serv_hours_ref');
      table.dropColumn('serv_hours_ref');
    })
};
