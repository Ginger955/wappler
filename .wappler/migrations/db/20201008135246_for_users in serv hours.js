
exports.up = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.string('for_users');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.dropColumn('for_users');
    })
};
