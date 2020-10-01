
exports.up = function(knex) {
  return knex.schema
    .createTable('gallery', function (table) {
      table.increments('id');
      table.string('images');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('gallery')
};
