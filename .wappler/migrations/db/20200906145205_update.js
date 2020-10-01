
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.string('specs');
    })
    .dropTable('top_models')
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.dropColumn('specs');
    })
    .createTable('top_models', function (table) {
      table.increments('id').primary().notNullable();
      table.string('make', 255);
      table.string('model', 255);
      table.string('year', 255);
      table.string('price', 255);
      table.string('image', 255);
    })
};
