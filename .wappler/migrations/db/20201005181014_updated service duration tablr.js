
exports.up = function(knex) {
  return knex.schema
    .table('service_duration', function (table) {
      table.increments('id');
      table.integer('service_type_id').unsigned();
      table.foreign('service_type_id').references('rev_type').inTable('service_types');
      table.integer('duration');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_duration', function (table) {
      table.dropColumn('id');
      table.dropForeign('service_type_id');
      table.dropColumn('service_type_id');
      table.dropColumn('duration');
    })
};
