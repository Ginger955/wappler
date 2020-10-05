
exports.up = function(knex) {
  return knex.schema
    .table('service_duration', function (table) {
      table.dropColumn('id');
      table.integer('gen_rev');
      table.integer('brk_repl');
      table.integer('eng_rev');
      table.integer('susp_rev');
      table.integer('steer_rev');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_duration', function (table) {
      table.increments('id').primary().notNullable();
      table.dropColumn('gen_rev');
      table.dropColumn('brk_repl');
      table.dropColumn('eng_rev');
      table.dropColumn('susp_rev');
      table.dropColumn('steer_rev');
    })
};
