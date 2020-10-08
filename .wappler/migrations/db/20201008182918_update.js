
exports.up = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.renameColumn('serv_hours_ref', 'serv_hours_refk');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.renameColumn('serv_hours_refk', 'serv_hours_ref');
    })
};
