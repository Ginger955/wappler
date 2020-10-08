
exports.up = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.dropColumn('total_duration');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.integer('total_duration');
    })
};
