
exports.up = function(knex) {
  return knex.schema
    .table('specs', function (table) {
      table.string('property');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('specs', function (table) {
      table.dropColumn('property');
    })
};
