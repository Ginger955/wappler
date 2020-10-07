
exports.up = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.date('date').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.timestamp('date').alter();
    })
};
