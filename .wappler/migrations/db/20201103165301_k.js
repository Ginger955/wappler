
exports.up = function(knex) {
  return knex.schema
    .table('reviews', function (table) {
      table.dropForeign('review_for_car');
      table.foreign('review_for_car').references('id').inTable('cars').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('reviews', function (table) {
      table.dropForeign('review_for_car');
    })
};
