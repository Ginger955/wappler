
exports.up = function(knex) {
  return knex.schema
    .createTable('service_appointments', function (table) {
      table.increments('id');
      table.date('date');
      table.integer('for_user').unsigned();
      table.foreign('for_user').references('id').inTable('users');
      table.integer('service_type').unsigned();
      table.foreign('service_type').references('id').inTable('service_types');
      table.integer('service_duration').unsigned();
      table.foreign('service_duration').references('id').inTable('service_duration');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('service_appointments')
};
