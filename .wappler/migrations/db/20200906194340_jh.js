
exports.up = function(knex) {
  return knex.schema
    .createTable('specs', function (table) {
      table.increments('id');
      table.string('topspeed');
      table.string('hp');
      table.string('seats');
      table.string('torque');
    })
    .then(() => {return knex('specs').insert({"car":"","id":"1","topspeed":"100 km/h","hp":"80","seats":"4","torque":"80 Nm"})
})};

exports.down = function(knex) {
  return knex.schema
    .dropTable('specs')
};
