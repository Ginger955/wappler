
exports.up = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.dropColumn('taken');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.boolean('taken');
    })
};
