
exports.up = function(knex) {
  return knex.schema
    .createTable('specs', function (table) {
      table.increments('id');
      table.string('topspeed');
      table.string('hp');
      table.string('seats');
      table.string('torque');
    })
    .then(() => {return knex('specs').insert({"car":""})
    .then(() => {return knex('specs').insert({"topspeed":"250 km/h","id":"2","hp":"170","torque":"180 Nm","seats":"5"})})
})};

exports.down = function(knex) {
  return knex.schema
    .dropTable('specs')
};
