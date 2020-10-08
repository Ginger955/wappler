
exports.up = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.dropForeign('appointment_id');
      table.dropColumn('appointment_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.integer('appointment_id').unsigned();
      table.foreign('appointment_id').references('id').inTable('service_appointments');
    })
};
