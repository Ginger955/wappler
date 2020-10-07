
exports.up = function(knex) {
  return knex.schema
    .dropTable('number_of_concurrent_appointments')
    .table('service_hours', function (table) {
      table.integer('no_appointments');
    })
};

exports.down = function(knex) {
  return knex.schema
    .createTable('number_of_concurrent_appointments', function (table) {
      table.increments('id').primary().notNullable();
      table.integer('number');
    })
    .table('service_hours', function (table) {
      table.dropColumn('no_appointments');
    })
};
