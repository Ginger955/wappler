
exports.up = function(knex) {
  return knex('service_hours').where('id', 7).update({"date":"9/5/2020"})
};

exports.down = function(knex) {
};
