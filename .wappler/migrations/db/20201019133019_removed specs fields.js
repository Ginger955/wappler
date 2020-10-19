
exports.up = function(knex) {
  return knex.schema
    .table('specs', function (table) {
      table.dropColumn('topspeed');
      table.dropColumn('hp');
      table.dropColumn('torque');
      table.dropColumn('seats');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('specs', function (table) {
      table.string('topspeed', 255);
      table.string('hp', 255);
      table.string('torque', 255);
      table.string('seats', 255);
    })
};
