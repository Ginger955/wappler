
exports.up = function(knex) {
  return knex.schema
    .createTable('number_of_concurrent_appointments', function (table) {
      table.increments('id');
      table.integer('number');
    })
    .then(() => {return knex('number_of_concurrent_appointments').insert({"number":2})
})};

exports.down = function(knex) {
  return knex.schema
    .dropTable('number_of_concurrent_appointments')
};
