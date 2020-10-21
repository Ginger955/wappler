
exports.up = function(knex) {
  return knex.schema
    .table('reviews', function (table) {
      table.integer('by_user').unsigned();
      table.foreign('by_user').references('id').inTable('users');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('reviews', function (table) {
      table.dropForeign('by_user');
      table.dropColumn('by_user');
    })
};
