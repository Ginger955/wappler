
exports.up = function(knex) {
  return knex.schema
    .table('service_duration', function (table) {
      table.dropColumn('gen_rev');
      table.dropColumn('brk_repl');
      table.dropColumn('eng_rev');
      table.dropColumn('susp_rev');
      table.dropColumn('steer_rev');
    })
    .table('service_types', function (table) {
      table.dropColumn('general_revision');
      table.dropColumn('brakes_replacement');
      table.dropColumn('engine_revision');
      table.dropColumn('suspension_revision');
      table.dropColumn('steering_revision');
      table.string('rev_type');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('service_duration', function (table) {
      table.integer('gen_rev');
      table.integer('brk_repl');
      table.integer('eng_rev');
      table.integer('susp_rev');
      table.integer('steer_rev');
    })
    .table('service_types', function (table) {
      table.string('general_revision', 255);
      table.string('brakes_replacement', 255);
      table.string('engine_revision', 255);
      table.string('suspension_revision', 255);
      table.string('steering_revision', 255);
      table.dropColumn('rev_type');
    })
};
