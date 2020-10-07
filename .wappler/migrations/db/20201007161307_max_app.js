
exports.up = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.integer('max_appointments');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.dropColumn('max_appointments');
    })
};
