
exports.up = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.string('serviceType');
      table.string('serviceDuration');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.dropColumn('serviceType');
      table.dropColumn('serviceDuration');
    })
};
