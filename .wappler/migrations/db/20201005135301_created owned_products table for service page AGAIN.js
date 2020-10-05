
exports.up = function(knex) {
  return knex.schema
    .createTable('owned_products', function (table) {
      table.increments('id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('owned_products')
};
