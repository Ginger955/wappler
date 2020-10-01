
exports.up = function(knex) {
  return knex.schema
    .createTable('top_models', function (table) {
      table.increments('id');
      table.string('make');
      table.string('model');
      table.string('year');
      table.string('price');
      table.string('image');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('top_models')
};
