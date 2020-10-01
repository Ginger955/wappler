
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.integer('price').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.string('price', 255).alter();
    })
};
