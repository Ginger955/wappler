
exports.up = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.dropColumn('for_users_ids');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.text('for_users_ids');
    })
};
