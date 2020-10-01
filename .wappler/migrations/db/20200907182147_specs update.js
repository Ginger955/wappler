
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.dropColumn('specs');
    })
    .then(() => {return knex('specs').where('id', 1).update({"topspeed":"280","hp":"190","torque":"150"})
    .then(() => {return knex('specs').where('id', 2).update({"topspeed":"330","hp":"260","torque":"200"})})
})};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.string('specs', 255);
    })
};
