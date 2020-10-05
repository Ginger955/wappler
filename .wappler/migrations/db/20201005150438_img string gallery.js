
exports.up = function(knex) {
  return knex.schema
    .table('gallery', function (table) {
      table.string('images', 255).alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('gallery', function (table) {
      table.json('images', 255).alter();
    })
};
