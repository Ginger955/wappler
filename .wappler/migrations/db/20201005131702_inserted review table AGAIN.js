
exports.up = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.string('username');
    })
    .createTable('reviews', function (table) {
      table.increments('id');
      table.integer('review_for_car').unsigned();
      table.foreign('review_for_car').references('undefined').inTable('undefined');
      table.integer('review_by_user').unsigned();
      table.foreign('review_by_user').references('undefined').inTable('undefined');
      table.string('title');
      table.string('text');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.dropColumn('username');
    })
    .dropTable('reviews')
};
