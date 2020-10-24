
exports.up = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.time('timeframe').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.string('timeframe', 255).alter();
    })
};
