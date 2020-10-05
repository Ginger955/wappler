
exports.up = function(knex) {
  return knex('reviews').insert({"review_for_car":"1","title":"test","text":"okokok","date":"10/5/2020","author":"C. Anghel"})
};

exports.down = function(knex) {
};
