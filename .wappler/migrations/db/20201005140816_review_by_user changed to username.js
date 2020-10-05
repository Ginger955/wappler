
exports.up = function(knex) {
  return knex.schema
    .table('reviews', function (table) {
      table.dropForeign('review_by_user');
      table.foreign('review_by_user').references('username').inTable('users');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('reviews', function (table) {
      table.dropForeign('review_by_user');
      table.foreign('review_by_user').references('id').inTable('users');
    })
};
