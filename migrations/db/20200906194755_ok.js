
exports.up = function(knex) {
  return knex.schema
    .createTable('specs', function (table) {
      table.increments('id');
      table.string('topspeed');
      table.string('hp');
      table.string('torque');
      table.string('seats');
    })
    .then(() => {return knex('specs').insert({"topspeed":"280 km/h","id":"1","hp":"190 hp","torque":"150 Nm","seats":"5"})
    .then(() => {return knex('specs').insert({"topspeed":"330 km/h","id":"2","hp":"260 hp","torque":"200 Nm","seats":"5"})})
})};

exports.down = function(knex) {
  return knex.schema
    .dropTable('specs')
};
