
exports.up = function(knex) {
  return knex.schema
    .dropTable('countries')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('countries', function (table) {
      table.increments('id').primary().notNullable();
      table.string('country_code', 2);
      table.string('country_name', 38);
    })
};
