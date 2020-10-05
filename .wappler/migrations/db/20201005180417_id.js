
exports.up = function(knex) {
  return knex.schema
    .table('service_types', function (table) {
      table.increments('id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_types', function (table) {
      table.dropColumn('id');
    })
};
