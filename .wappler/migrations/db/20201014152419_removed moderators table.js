
exports.up = function(knex) {
  return knex.schema
    .dropTable('moderators')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('moderators', function (table) {
      table.increments('id').primary().notNullable();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users');
    })
};
