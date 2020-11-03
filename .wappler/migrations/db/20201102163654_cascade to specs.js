
exports.up = function(knex) {
  return knex.schema
    .table('specs', function (table) {
      table.dropForeign('specs_for_car');
      table.foreign('specs_for_car').references('id').inTable('cars').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('specs', function (table) {
      table.dropForeign('specs_for_car');
    })
};
