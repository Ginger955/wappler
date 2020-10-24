
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.integer('invisible').defaultTo('0');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.dropColumn('invisible');
    })
};
