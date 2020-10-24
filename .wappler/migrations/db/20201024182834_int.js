
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.integer('invisible').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.decimal('invisible').alter();
    })
};
