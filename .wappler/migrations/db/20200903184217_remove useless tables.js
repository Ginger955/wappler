
exports.up = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.dropColumn('first_name');
      table.dropColumn('last_name');
      table.dropColumn('gender');
      table.dropColumn('company');
      table.dropColumn('avatar');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.string('first_name', 8);
      table.string('last_name', 10);
      table.string('gender', 6);
      table.string('company', 29);
      table.string('avatar', 25);
    })
};
