
exports.up = function(knex) {
  return knex.schema
    .createTable('service_hours', function (table) {
      table.increments('id');
      table.string('timeframe');
      table.boolean('taken');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('service_hours')
};
