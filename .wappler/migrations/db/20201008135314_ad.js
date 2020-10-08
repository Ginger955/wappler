
exports.up = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.renameColumn('for_users', 'for_users_ids');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.renameColumn('for_users_ids', 'for_users');
    })
};
