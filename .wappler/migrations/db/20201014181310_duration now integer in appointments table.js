
exports.up = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.integer('duration').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.string('duration', 255).alter();
    })
};
