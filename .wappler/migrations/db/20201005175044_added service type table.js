
exports.up = function(knex) {
  return knex.schema
    .createTable('service_types', function (table) {
      table.string('general_revision');
      table.string('brakes_replacement');
      table.string('engine_revision');
      table.string('suspension_revision');
      table.string('steering_revision');
    })
    .createTable('service_duration', function (table) {
      table.increments('id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('service_types')
    .dropTable('service_duration')
};
