
exports.up = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.integer('for_user').unsigned();
      table.foreign('for_user').references('undefined').inTable('undefined');
      table.integer('service_type').unsigned();
      table.foreign('service_type').references('undefined').inTable('undefined');
      table.integer('service_duration').unsigned();
      table.foreign('service_duration').references('undefined').inTable('undefined');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_hours', function (table) {
      table.dropForeign('for_user');
      table.dropColumn('for_user');
      table.dropForeign('service_type');
      table.dropColumn('service_type');
      table.dropForeign('service_duration');
      table.dropColumn('service_duration');
    })
};
