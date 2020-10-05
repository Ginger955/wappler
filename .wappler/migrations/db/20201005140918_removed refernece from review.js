
exports.up = function(knex) {
  return knex.schema
    .table('reviews', function (table) {
      table.dropForeign('review_by_user');
      table.dropColumn('review_by_user');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('reviews', function (table) {
      table.integer('review_by_user').unsigned();
      table.foreign('review_by_user').references('id').inTable('users');
    })
};
