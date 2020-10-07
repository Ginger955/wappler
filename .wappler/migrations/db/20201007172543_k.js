
exports.up = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.dropForeign('service_type');
      table.dropColumn('service_type');
      table.dropForeign('service_duration');
      table.dropColumn('service_duration');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_appointments', function (table) {
      table.integer('service_type').unsigned();
      table.foreign('service_type').references('id').inTable('service_types');
      table.integer('service_duration').unsigned();
      table.foreign('service_duration').references('id').inTable('service_duration');
    })
};
