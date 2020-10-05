
exports.up = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.time('timeframe').alter();
      table.date('date');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.string('timeframe', 255).alter();
      table.dropColumn('date');
    })
};
