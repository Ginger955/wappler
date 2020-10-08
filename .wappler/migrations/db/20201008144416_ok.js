
exports.up = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.text('for_users_ids').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.string('for_users_ids', 255).alter();
    })
};
