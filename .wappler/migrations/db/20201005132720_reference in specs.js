
exports.up = function(knex) {
  return knex.schema
    .table('specs', function (table) {
      table.integer('specs_for_car').unsigned();
      table.foreign('specs_for_car').references('id').inTable('cars');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('specs', function (table) {
      table.dropForeign('specs_for_car');
      table.dropColumn('specs_for_car');
    })
};
