
exports.up = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.renameColumn('serviceType', 'type');
      table.renameColumn('serviceDuration', 'duration');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.renameColumn('type', 'serviceType');
      table.renameColumn('duration', 'serviceDuration');
    })
};
